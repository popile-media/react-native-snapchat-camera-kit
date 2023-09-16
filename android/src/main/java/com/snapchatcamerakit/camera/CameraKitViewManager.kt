package com.snapchatcamerakit.camera

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReadableArray
import com.facebook.react.bridge.ReadableMap
import com.facebook.react.common.MapBuilder
import com.facebook.react.uimanager.ThemedReactContext
import com.facebook.react.uimanager.ViewGroupManager
import com.facebook.react.uimanager.annotations.ReactProp
import com.snapchatcamerakit.camera.enums.Events
import com.snapchatcamerakit.sharedpreferences.SharedDataProvider

@Suppress("unused")
class CameraKitViewManager(reactContext: ReactApplicationContext) : ViewGroupManager<CameraKitView>() {
  companion object {
    const val NAME = "CameraKitView"
  }

  private val reactContext: ReactApplicationContext = reactContext

  override fun getName(): String = NAME

  override fun needsCustomLayoutForChildren(): Boolean {
    return true
  }

  override fun getExportedCustomDirectEventTypeConstants(): Map<String, Any> {
    return MapBuilder.builder<String, Any>()
      .put(Events.ON_INITIALIZED, MapBuilder.of("registrationName", Events.ON_INITIALIZED))
      .put(Events.ON_LENS_CHANGED, MapBuilder.of("registrationName", Events.ON_LENS_CHANGED))
      .put(Events.ON_PHOTO_TAKEN, MapBuilder.of("registrationName", Events.ON_PHOTO_TAKEN))
      .put(Events.ON_VIDEO_RECORDING_FINISHED, MapBuilder.of("registrationName", Events.ON_VIDEO_RECORDING_FINISHED))
      .put(Events.ON_ERROR, MapBuilder.of("registrationName", Events.ON_ERROR))
      .build()
  }

  override fun createViewInstance(context: ThemedReactContext): CameraKitView {
    val apiKey = SharedDataProvider.getSharedValue("apiKey")
    val applicationId = SharedDataProvider.getSharedValue("applicationId")

    if (apiKey != null && applicationId != null) {
      return CameraKitView(context, apiKey, applicationId)
    }

    return CameraKitView(context, null, null)
  }

  @ReactProp(name = "isActive", defaultBoolean = true)
  fun setIsActive(
    view: CameraKitView,
    isActive: Boolean,
  ) {
    view.setActive(isActive)
  }

  @ReactProp(name = "initialCameraFacing")
  fun setInitialCameraFacing(
    view: CameraKitView,
    initialCameraFacing: String,
  ) {
    view.setInitialCameraFacing(initialCameraFacing)
  }

  @ReactProp(name = "initialLens")
  fun setInitialLens(
    view: CameraKitView,
    initialLens: ReadableMap?,
  ) {
    if (initialLens == null) {
      return
    }

    val isIdExist = initialLens.hasKey("id")

    if (!isIdExist) {
      // todo: id not exist, throw an error
      return
    }

    val id = initialLens.getString("id") as String

    view.setInitialLens(id, initialLens.getMap("launchData"))
  }

  @ReactProp(name = "lensGroups")
  fun setLensGroups(
    view: CameraKitView,
    lensGroups: ReadableArray?,
  ) {
    if (lensGroups != null) {
      view.setLensGroups(lensGroups)
    }
  }

  @ReactProp(name = "zoom")
  fun setZoom(
    view: CameraKitView,
    enabled: Boolean,
  ) {
    if (enabled) {
      //
    } else {
      //
    }

    // todo
  }

  @ReactProp(name = "focus")
  fun setFocus(
    view: CameraKitView,
    enabled: Boolean,
  ) {
    if (enabled) {
      //
    } else {
      //
    }

    // todo
  }

  @ReactProp(name = "torch")
  fun setTorch(
    view: CameraKitView,
    options: ReadableMap?,
  ) {
    // todo
  }
}
