package com.snapchatcamerakit.camera

import com.facebook.react.bridge.ReadableMap
import com.snapchatcamerakit.camera.errors.CameraNotReadyError

fun CameraKitView.takePhoto(options: ReadableMap?) {
  if (cameraKitSession == null) {
    throw CameraNotReadyError()
  }

  // todo
  // val bitmap = session.processor.toBitmap(720, 1280, rotationDegrees = 0)
}
