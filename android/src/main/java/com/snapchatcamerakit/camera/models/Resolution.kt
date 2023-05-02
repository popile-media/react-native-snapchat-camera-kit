package com.snapchatcamerakit.camera.models

class Resolution(height: Int, width: Int) {
    val height: Int = height
    val width: Int = width

    companion object {
        private val DEFAULT = Resolution(1280, 720)

        fun getDefault(): Resolution {
            return DEFAULT
        }

        fun fromString(resolutionStr: String?): Resolution {
            return when (resolutionStr) {
                "480p" -> Resolution(640, 480)
                "720p" -> Resolution(1280, 720)
                "1080p" -> Resolution(1920, 1080)
                "2160p" -> Resolution(3840, 2160)
                else -> {
                    DEFAULT
                }
            }
        }
    }
}