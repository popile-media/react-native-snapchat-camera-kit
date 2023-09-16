package com.snapchatcamerakit

import com.facebook.react.ReactPackage
import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.uimanager.ViewManager
import com.snapchatcamerakit.camera.CameraKitViewManager
import com.snapchatcamerakit.camera.CameraKitViewModule
import com.snapchatcamerakit.permissionmanager.CameraPermissionManagerModule
import com.snapchatcamerakit.videoutils.VideoUtilsModule

class SnapchatCameraKitPackage : ReactPackage {
  override fun createNativeModules(reactContext: ReactApplicationContext): List<NativeModule> {
    return listOf(
      CameraKitViewModule(reactContext),
      CameraPermissionManagerModule(reactContext),
      VideoUtilsModule(reactContext),
    )
  }

  override fun createViewManagers(reactContext: ReactApplicationContext): List<ViewManager<*, *>> {
    return listOf(CameraKitViewManager(reactContext))
  }
}
