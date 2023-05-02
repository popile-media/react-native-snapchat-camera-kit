package com.snapchatcamerakit.camera

import com.snapchatcamerakit.camera.errors.CameraNotReadyError
import com.facebook.react.bridge.ReadableMap

fun CameraKitView.takePhoto(options: ReadableMap?) {
    if (cameraKitSession == null) {
        throw CameraNotReadyError()
    }

    // todo
    // val bitmap = session.processor.toBitmap(720, 1280, rotationDegrees = 0)
}
