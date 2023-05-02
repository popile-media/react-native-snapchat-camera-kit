package com.snapchatcamerakit.camera.errors

class ErrorHelper {
    companion object {
        fun getCode(cameraError: CameraError): String {
            val domain: String = cameraError.domain
            val id: String = cameraError.id
            return "$domain/$id"
        }
    }
}