package com.snapchatcamerakit.camera

import android.Manifest
import android.annotation.SuppressLint
import android.app.Activity
import android.content.Context
import android.content.ContextWrapper
import android.util.Rational
import android.view.TextureView
import android.view.View
import android.widget.FrameLayout
import androidx.fragment.app.FragmentActivity
import com.snapchatcamerakit.R
import com.snapchatcamerakit.camera.enums.CameraFacings
import com.snapchatcamerakit.camera.enums.LensEventStatus
import com.snapchatcamerakit.camera.errors.CameraKitCoreError
import com.snapchatcamerakit.camera.errors.CameraKitSessionErrorHandler
import com.snapchatcamerakit.camera.models.Lens
import com.snapchatcamerakit.camera.video.AudioProcessorSource
import com.facebook.react.bridge.ReadableArray
import com.facebook.react.bridge.ReadableMap
import com.facebook.react.uimanager.ThemedReactContext
import com.snap.camerakit.*
import com.snap.camerakit.support.arcore.ArCoreImageProcessorSource
import com.snap.camerakit.lenses.*
import com.snap.camerakit.support.camera.AllowsCameraPreview
import com.snap.camerakit.support.camera.AspectRatio
import com.snap.camerakit.support.camera.Crop
import com.snap.camerakit.support.camerax.CameraXImageProcessorSource
import com.snap.camerakit.support.permissions.HeadlessFragmentPermissionRequester
import com.snap.camerakit.support.widget.*
import java.io.Closeable
import java.util.concurrent.Executors

// 150MB to make sure that some lenses that use large assets such as the ones required for
// 3D body tracking (https://lensstudio.snapchat.com/templates/object/3d-body-tracking) have
// enough cache space to fit alongside other lenses.
private const val DEFAULT_LENSES_CONTENT_CACHE_SIZE_MAX_BYTES = 150L * 1024L * 1024L

private val DEFAULT_REQUIRED_PERMISSIONS = arrayOf(Manifest.permission.CAMERA)
private val DEFAULT_OPTIONAL_PERMISSIONS =
  arrayOf(Manifest.permission.RECORD_AUDIO, Manifest.permission.READ_EXTERNAL_STORAGE)

class CameraKitView(
  context: Context,
  private var apiKey: String?,
  private var applicationId: String?
) : FrameLayout(context) {
  companion object {
    val TAG = CameraKitView::class.simpleName
  }

  var ref = this

  var activeImageProcessorSource: Source<ImageProcessor> = Source.Noop.get()

  private val imageProcessorSource: Source<ImageProcessor> by lazy {
    val currentActivity: Activity? =
      (context as ThemedReactContext).reactApplicationContext.currentActivity
    val lifecycleOwner = currentActivity as FragmentActivity

    // Here we obtain Source of ImageProcessor backed by the CameraX library which simplifies quite a bit
    // of things related to Android camera management. CameraX is one of many options to implement Source,
    // anything that can provide image frames through a SurfaceTexture can be used by CameraKit.
    val cameraXImageProcessorSource = CameraXImageProcessorSource(
      context = context,
      lifecycleOwner = lifecycleOwner,
      executorService = processorExecutor,
      videoOutputDirectory = this.context.applicationContext.cacheDir
    )

    // Use cameraXImageProcessorSource as an active source by default.
    activeImageProcessorSource = cameraXImageProcessorSource

    if (context.arCoreAvailable) {
      val surfaceTrackingSourceProvider = {
        // ArCoreImageProcessorSource is the only currently supported option to provide surface tracking data
        // or depth data when required by applied lens.
        if (context.arCoreSupportedAndInstalled) {
          ArCoreImageProcessorSource(
            context = context,
            lifecycleOwner = lifecycleOwner,
            executorService = processorExecutor,
            videoOutputDirectory = this.context.applicationContext.cacheDir
          )
        } else {
          null
        }
      }
      // This is an implementation of Source<ImageProcessor> that attach ImageProcessor to one of the provided
      // sources according to ImageProcessor requirements to input capabilities.
      SwitchForSurfaceTrackingImageProcessorSource(
        cameraXImageProcessorSource, surfaceTrackingSourceProvider,
        { source ->
          if (activeImageProcessorSource != source) {
            this.activeImageProcessorSource = source
            // Call startPreview on attached Source to let it dispatch frames to ImageProcessor.
            startPreview()
          }
        }
      )
    } else {
      cameraXImageProcessorSource
    }
  }

  var cameraKitSession: Session? = null
  var recordingCloseable: Closeable? = null
  var isCameraFacingFront = true

  private var initialLensId: String? = null
  private var initialLensLaunchData: ReadableMap? = null
  private var initialCameraFacing: String? = null
  private var lensGroups: ReadableArray? = null
  private var isZoomEnabled: Boolean = false
  private var isFocusEnabled: Boolean = false

  private val processorExecutor = Executors.newSingleThreadExecutor()
  private var closeOnDetach = mutableListOf<Closeable>()

  var audioProcessorSource: AudioProcessorSource = AudioProcessorSource()
  private var isActive = false
  private var textureView: TextureView

  //
  private var onSessionAvailable: (Session) -> Unit = {}
  private var isAttached = false
  private var cameraFacingFront: Boolean = true
  private var cameraMirrorHorizontally: Boolean = false
  private var cameraAspectRatio: AspectRatio = AspectRatio.RATIO_16_9
  private var cameraCropToRootViewRatio: Boolean = false

  private val requiredPermissions: Array<String> = DEFAULT_REQUIRED_PERMISSIONS
  private val optionalPermissions: Array<String> = DEFAULT_OPTIONAL_PERMISSIONS

  init {
    inflate(context, R.layout.snap_camera_kit_view, this)
    this.textureView = findViewById(R.id.snap_camera_kit_texture)
  }

  fun onSessionAvailable(callback: (Session) -> Unit) {
    onSessionAvailable = callback
  }

  private fun startPreview(
    facingFront: Boolean = cameraFacingFront,
    mirrorHorizontally: Boolean = cameraMirrorHorizontally,
    aspectRatio: AspectRatio = cameraAspectRatio,
    cropToRootViewRatio: Boolean = cameraCropToRootViewRatio,
    callback: (succeeded: Boolean) -> Unit = {}
  ) {
    cameraFacingFront = facingFront
    cameraMirrorHorizontally = mirrorHorizontally
    cameraAspectRatio = aspectRatio
    cameraCropToRootViewRatio = cropToRootViewRatio
    val options = if (mirrorHorizontally) {
      setOf(ImageProcessor.Input.Option.MirrorFramesHorizontally)
    } else {
      emptySet()
    }
    val cropOption = if (cropToRootViewRatio) {
      Crop.Center(Rational(measuredWidth, measuredHeight))
    } else {
      Crop.None
    }

    // This source is Source.Noop until it gets replaced by one configured for a new Session.
    val configuration =
      AllowsCameraPreview.Configuration.Default(facingFront, aspectRatio, cropOption)
    (activeImageProcessorSource as? AllowsCameraPreview)?.startPreview(
      configuration, options, callback
    )
  }

  fun setInitialCameraFacing(_initialCameraFacing: String) {
    if (isActive) {
      return
    }

    if (this.initialCameraFacing != null) {
      return
    }

    this.initialCameraFacing = _initialCameraFacing
    isCameraFacingFront = CameraFacings.isFront(_initialCameraFacing)
  }

  fun setActive(_isActive: Boolean) {
//        if (_isActive) {
//          (activeImageProcessorSource as? AllowsCameraPreview)?.startPreview(
//                facingFront = this.isCameraFacingFront
//            )
//        } else {
//          (activeImageProcessorSource as? AllowsCameraPreview)?.stopPreview()
//        }
//
//        this.isActive = _isActive
  }

  fun setZoom(_isZoomEnabled: Boolean) {
    this.isZoomEnabled = _isZoomEnabled

    // todo
  }

  fun setFocus(_isFocusEnabled: Boolean) {
    this.isFocusEnabled = _isFocusEnabled

    // todo
  }

  fun setInitialLens(id: String, launchData: ReadableMap?) {
    this.initialLensId = id
    this.initialLensLaunchData = launchData
  }

  fun setLensGroups(_lensGroups: ReadableArray) {
    this.lensGroups = _lensGroups
  }

  private fun View.requireActivity(): Activity {
    var context: Context = context
    while (context is ContextWrapper) {
      if (context is Activity) {
        return context
      }
      context = (context).baseContext
    }
    throw IllegalStateException("Could not find an Activity required to host this view: $this")
  }

  private fun onReadyForNewSession(): Boolean {
    return if (!supported(context)) {
      false
    } else {
      cameraKitSession = newSession().also {
        onSessionAvailable(it)
      }
      startPreview()
      true
    }
  }

  // This block configures and creates a new CameraKit instance that is the main entry point to all its features.
  // The CameraKit instance must be closed when appropriate to avoid leaking any resources.
  private fun newSession(): Session {
    return Session
      .newBuilder(this.context)
      .apiToken(this.apiKey)
      .applicationId(this.applicationId)
      .imageProcessorSource(this.imageProcessorSource)
      .audioProcessorSource(this.audioProcessorSource)
      .handleErrorsWith(CameraKitSessionErrorHandler {
        invokeOnError(ref, CameraKitCoreError(it))
      })
      .configureLenses {
        // dispatchTouchEventsTo(previewGestureHandler)
        configureCache {
          lensContentMaxSize = DEFAULT_LENSES_CONTENT_CACHE_SIZE_MAX_BYTES
        }
      }
      .build()
  }

  private fun handlePermissions() {
    HeadlessFragmentPermissionRequester(
      requireActivity(),
      (requiredPermissions + optionalPermissions).toSet()
    ) { results ->
      if (requiredPermissions.all { results[it] == true }) {
        // We schedule the block below to run on the next frame in order to allow CameraLayout users to provide
        // any necessary configuration callbacks after the view gets attached which may happen immediately after
        // inflation in cases such as Activity being restored from a saved state.
        post {
          if (isAttached) {
            if (!onReadyForNewSession()) {
              // todo: CameraKit is not supported on this device
            }
          } else {
            // todo: Not attached to a window, won't attempt to create a new CameraKit Session
          }
        }
      } else {
        // todo: Required permissions were not granted for $TAG to start a new CameraKit Session, + requestedPermission
      }
    }.closeOnDetach()
  }

  @SuppressLint("CheckResult")
  override fun onAttachedToWindow() {
    super.onAttachedToWindow()
    isAttached = true

    // todo: request permissions before proceed?
    handlePermissions()

    val newSession = newSession()

    newSession.processor.connectOutput(this.textureView).closeOnDetach()
    startPreview()

    this.cameraKitSession = newSession

    if (this.initialLensId != null) {
      this.lensGroups?.let {
        applyLensById(
          this.initialLensId!!,
          it,
          this.initialLensLaunchData,
          null
        )
      }
    }

    this.cameraKitSession!!.lenses.processor.observe { event ->
      event.whenApplied { result ->
        invokeOnLensChanged(this, LensEventStatus.APPLIED, Lens(result.lens))
      }
      event.whenIdle {
        invokeOnLensChanged(this, LensEventStatus.IDLE, null)
      }
      event.whenFirstFrameProcessed { result ->
        invokeOnLensChanged(this, LensEventStatus.FIRST_FRAME_PROCESSED, Lens(result.lens))
      }
    }

    invokeOnInitialized(this)
  }

  override fun onDetachedFromWindow() {
    isAttached = false
    (activeImageProcessorSource as? AllowsCameraPreview)?.stopPreview()

    // close all closeables
    closeOnDetach.forEach { closeable ->
      closeable.close()
    }
    closeOnDetach.clear()

    initialLensId = null
    initialCameraFacing = null

    cameraKitSession?.close()
    cameraKitSession = null

    super.onDetachedFromWindow()
  }

  private fun Closeable.closeOnDetach() {
    if (isAttached) {
      closeOnDetach.add(this)
    } else {
      close()
    }
  }
}
