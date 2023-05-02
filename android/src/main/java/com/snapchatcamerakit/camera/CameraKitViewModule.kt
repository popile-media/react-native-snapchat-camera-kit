package com.snapchatcamerakit.camera

import android.graphics.Point
import com.snapchatcamerakit.sharedpreferences.SharedDataProvider
import com.snapchatcamerakit.sharedpreferences.SharedHandler
import com.snapchatcamerakit.camera.errors.ViewNotFoundError
import com.snapchatcamerakit.camera.models.Meta
import com.snapchatcamerakit.camera.utils.*
import com.facebook.react.bridge.*
import com.facebook.react.bridge.UiThreadUtil.runOnUiThread
import com.facebook.react.module.annotations.ReactModule
import com.facebook.react.uimanager.UIManagerHelper
import com.google.ar.core.ArCoreApk
import com.snap.camerakit.supported
import kotlinx.coroutines.*


@ReactModule(name = CameraKitViewModule.NAME)
class CameraKitViewModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
    companion object {
        const val NAME = "CameraKitView"
        const val SHARED_NAME = "snapchat_camera_kit_shared_preferences"
    }

    private val reactContext = reactContext
    private val coroutineScope = CoroutineScope(Dispatchers.Default)

    override fun getName(): String = NAME

    private fun cleanup() {
        if (coroutineScope.isActive) {
            coroutineScope.cancel("CameraKitView has been destroyed.")
        }
    }

    override fun onCatalystInstanceDestroy() {
        super.onCatalystInstanceDestroy()
        cleanup()
    }

    override fun invalidate() {
        super.invalidate()
        cleanup()
    }

    private fun findCameraView(viewId: Int): CameraKitView {
        val view = if (reactApplicationContext != null) UIManagerHelper.getUIManager(reactApplicationContext, viewId)?.resolveView(viewId) as CameraKitView? else null
        return view ?: throw ViewNotFoundError(viewId)
    }

    init {
        SharedHandler.init(reactContext, SHARED_NAME);
    }

    @ReactMethod
    fun checkToneModeSupporting(viewTag: Int, callback: Callback) {
        coroutineScope.launch {
            runOnUiThread {
                val view = findCameraView(viewTag)

                try {
                    view.checkToneModeSupporting(callback)
                } catch (error: Throwable) {
                    val map = makeErrorMap("unknown/unknown", "An unknown error occurred!", error)
                    callback(null, map)
                }
            }
        }
    }

    @ReactMethod
    fun checkBlurSupporting(viewTag: Int, callback: Callback) {
        coroutineScope.launch {
            runOnUiThread {
                val view = findCameraView(viewTag)

                try {
                    view.checkBlurSupporting(callback)
                } catch (error: Throwable) {
                    val map = makeErrorMap("unknown/unknown", "An unknown error occurred!", error)
                    callback(null, map)
                }
            }
        }
    }

    @ReactMethod
    fun adjustBlur(viewTag: Int, amount: Double) {
        coroutineScope.launch {
            runOnUiThread {
                val view = findCameraView(viewTag)
                view.adjustBlur(amount)
            }
        }
    }

    @ReactMethod
    fun adjustTone(viewTag: Int, amount: Double) {
        coroutineScope.launch {
            runOnUiThread {
                val view = findCameraView(viewTag)
                view.adjustTone(amount)
            }
        }
    }

    @ReactMethod
    fun takePhoto(viewTag: Int, options: ReadableMap, promise: Promise) {
        coroutineScope.launch {
            runOnUiThread {
                withPromise(promise) {
                    val view = findCameraView(viewTag)

                    return@withPromise view.takePhoto(options)
                }
            }
        }
    }

    @ReactMethod
    fun flipCamera(viewTag: Int, promise: Promise) {
        coroutineScope.launch {
            runOnUiThread {
                withPromise(promise) {
                    val view = findCameraView(viewTag)
                    view.flipCamera()

                    if (view.isCameraFacingFront) {
                        return@withPromise "front"
                    } else {
                        return@withPromise "back"
                    }
                }
            }
        }
    }

    @ReactMethod
    fun zoom(viewTag: Int, factor: Double, promise: Promise) {
        coroutineScope.launch {
            runOnUiThread {
                withPromise(promise) {
                    val view = findCameraView(viewTag)
                    view.zoom(factor.toFloat())

                    return@withPromise null
                }
            }
        }
    }

    @ReactMethod
    fun focus(viewTag: Int, x: Double, y: Double, promise: Promise) {
        coroutineScope.launch {
            runOnUiThread {
                withPromise(promise) {
                    val view = findCameraView(viewTag)
                    val point = Point(x.toInt(), y.toInt())

                    view.focus(point)

                    return@withPromise null
                }
            }
        }
    }

    @ReactMethod
    fun changeLensById(viewTag: Int, lensId: String, lensGroups: ReadableArray, launchData: ReadableMap?, promise: Promise) {
        runOnUiThread {
            val view = findCameraView(viewTag)
            view.applyLensById(lensId, lensGroups, launchData, promise)
        }
    }

    @ReactMethod
    fun getLensesByGroupId(viewTag: Int, lensGroups: ReadableArray, callback: Callback) {
        coroutineScope.launch {
            runOnUiThread {
                val view = findCameraView(viewTag)

                try {
                    view.getLensesByGroupId(lensGroups, callback)
                } catch (error: Throwable) {
                    val map = makeErrorMap("unknown/unknown", "An unknown error occurred!", error)
                    callback(null, map)
                }
            }
        }
    }

    @ReactMethod
    fun clearLenses(viewTag: Int, callback: Callback) {
        coroutineScope.launch {
            runOnUiThread {
                val view = findCameraView(viewTag)

                try {
                    view.clearLenses(callback)
                } catch (error: Throwable) {
                    val map = makeErrorMap("unknown/unknown", "An unknown error occurred!", error)
                    callback(null, map)
                }
            }
        }
    }

    @ReactMethod
    fun startRecording(viewTag: Int, options: ReadableMap, promise: Promise) {
        runOnUiThread {
            val view = findCameraView(viewTag)
            view.startRecording(options, promise)
        }
    }

    @ReactMethod
    fun pauseRecording(viewTag: Int, promise: Promise) {
        coroutineScope.launch {
            runOnUiThread {
                withPromise(promise) {
                    val view = findCameraView(viewTag)
                    view.pauseRecording()

                    return@withPromise null
                }
            }
        }
    }

    @ReactMethod
    fun resumeRecording(viewTag: Int, promise: Promise) {
        coroutineScope.launch {
            runOnUiThread {
                withPromise(promise) {
                    val view = findCameraView(viewTag)
                    view.resumeRecording()

                    return@withPromise null
                }
            }
        }
    }

    @ReactMethod
    fun cancelRecording(viewTag: Int, promise: Promise) {
        coroutineScope.launch {
            runOnUiThread {
                withPromise(promise) {
                    val view = findCameraView(viewTag)
                    view.cancelRecording()

                    return@withPromise null
                }
            }
        }
    }

    @ReactMethod
    fun stopRecording(viewTag: Int, promise: Promise) {
        coroutineScope.launch {
            runOnUiThread {
                withPromise(promise) {
                    val view = findCameraView(viewTag)
                    view.stopRecording()

                    return@withPromise null
                }
            }
        }
    }

    @ReactMethod
    fun adjustLensesVolume(viewTag: Int, mute: Boolean, callback: Callback) {
      coroutineScope.launch {
        runOnUiThread {
          val view = findCameraView(viewTag)

          try {
            view.adjustLensesVolume(mute, callback)
          } catch (error: Throwable) {
            val map = makeErrorMap("unknown/unknown", "An unknown error occurred!", error)
            callback(null, map)
          }
        }
      }
    }

    @ReactMethod
    fun init(options: ReadableMap) {
        coroutineScope.launch {
            runOnUiThread {
                val apiKey = options.getString("apiKey")
                val applicationId = options.getString("applicationId")

                SharedDataProvider.putSharedValue("apiKey", apiKey)
                SharedDataProvider.putSharedValue("applicationId", applicationId)
            }
        }
    }

    @ReactMethod
    fun getMetadata(callback: Callback) {
        coroutineScope.launch {
            runOnUiThread {
                val supported = supported(reactContext)

                val openGLESVersionCode = OpenGLES.getVersionCode(reactContext)
                val openGLESVersionName = OpenGLES.getVersionName(openGLESVersionCode)

                val arCoreSupported = ArCoreApk.getInstance().checkAvailability(reactContext).isSupported

                val meta = Meta(supported, openGLESVersionCode, openGLESVersionName, arCoreSupported).toBridge()

                callback(meta, null)
            }
        }
    }
}
