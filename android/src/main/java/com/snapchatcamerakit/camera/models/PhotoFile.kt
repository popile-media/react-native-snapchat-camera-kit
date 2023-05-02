package com.snapchatcamerakit.camera.models

import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.ReadableMap
import com.facebook.react.bridge.WritableMap

class PhotoFile(private var path: String, private var height: Int, private var width: Int) {

    fun toBridge(): ReadableMap {
        val map: WritableMap = Arguments.createMap()

        map.putString("path", this.path)
        map.putInt("height", this.height)
        map.putInt("width", this.width)

        return map
    }
}