package com.snapchatcamerakit.camera.models

import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.ReadableMap

class Meta(private var supported: Boolean, private var openGLESVersionCode: Int, private var openGLESVersionName: String?, private var arCoreSupported: Boolean) {
  fun toBridge(): ReadableMap {
    val data = Arguments.createMap()

    data.putBoolean("supported", supported)
    data.putBoolean("arCoreSupported", arCoreSupported)

    val openGLES = Arguments.createMap()
    openGLES.putInt("code", openGLESVersionCode)
    openGLES.putString("name", openGLESVersionName)

    data.putMap("openGLES", openGLES)

    return data
  }
}
