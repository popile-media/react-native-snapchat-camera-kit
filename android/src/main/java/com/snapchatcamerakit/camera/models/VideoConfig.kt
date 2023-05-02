package com.snapchatcamerakit.camera.models

import com.facebook.react.bridge.ReadableMap

class VideoConfig(flashEnabled: Boolean, maxDurationSeconds: Int, resolution: Resolution) {
    val flashEnabled: Boolean = flashEnabled
    val maxDurationSeconds: Int = maxDurationSeconds
    val resolution: Resolution = resolution

    companion object {
        private val DEFAULT = VideoConfig(false, 1800, Resolution.getDefault())

        fun getDefault(): VideoConfig {
            return DEFAULT
        }

        fun fromBridge(readableMap: ReadableMap?): VideoConfig {
            if (readableMap == null) {
                return DEFAULT
            }

            val flashEnabled = readableMap.getBoolean("flashEnabled")
            val maxDurationSeconds = readableMap.getInt("maxDurationSeconds")
            val resolution = Resolution.fromString(readableMap.getString("resolution"))

            return VideoConfig(flashEnabled, maxDurationSeconds, resolution)
        }
    }
}