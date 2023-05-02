package com.snapchatcamerakit.camera.utils

import com.snapchatcamerakit.camera.errors.CameraError
import com.snapchatcamerakit.camera.errors.UnknownCameraError
import com.facebook.react.bridge.Promise

inline fun withPromise(promise: Promise, closure: () -> Any?) {
    try {
        val result = closure()
        promise.resolve(result)
    } catch (e: Throwable) {
        e.printStackTrace()
        val error = if (e is CameraError) e else UnknownCameraError(e)
        promise.reject("${error.domain}/${error.id}", error.message, error.cause)
    }
}