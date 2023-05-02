package com.snapchatcamerakit.camera.errors

import com.snap.camerakit.common.Consumer

// Handle all camera-kit related errors
class CameraKitSessionErrorHandler(val handlerCallback: (th: Throwable) -> Unit) : Consumer<Throwable> {
    override fun accept(th: Throwable) {
        handlerCallback(th)
    }
}
