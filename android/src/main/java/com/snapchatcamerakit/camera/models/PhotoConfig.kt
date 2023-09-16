package com.snapchatcamerakit.camera.models

import com.facebook.react.bridge.ReadableMap

class PhotoConfig(flashEnabled: Boolean, resolution: Resolution) {
  val flashEnabled: Boolean = flashEnabled
  val resolution: Resolution = resolution

  companion object {
    private val DEFAULT = PhotoConfig(false, Resolution.getDefault())

    fun getDefault(): PhotoConfig {
      return DEFAULT
    }

    fun fromBridge(readableMap: ReadableMap?): PhotoConfig {
      if (readableMap == null) {
        return DEFAULT
      }

      var flashEnabled = readableMap.getBoolean("flashEnabled")
      var resolution = Resolution.fromString(readableMap.getString("resolution"))

      return PhotoConfig(flashEnabled, resolution)
    }
  }
}
