package com.snapchatcamerakit.camera.models

import com.snapchatcamerakit.camera.enums.CameraFacings
import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.ReadableMap
import com.snap.camerakit.lenses.LensesComponent

class Lens(_lens: LensesComponent.Lens) {
    private val lens = _lens

    fun toBridge(): ReadableMap {
        val map = Arguments.createMap()

        val facingPreference = if (lens.facingPreference == LensesComponent.Lens.Facing.BACK) {
            CameraFacings.BACK
        } else {
            CameraFacings.FRONT
        }

        val icons = Arguments.createArray()

        lens.icons.forEach() { icon ->
            val img = Arguments.createMap()
            img.putString("type", icon.javaClass.simpleName)
            img.putString("uri", icon.uri)

            icons.pushMap(img)
        }

        val previews = Arguments.createArray()

        lens.previews.forEach() { preview ->
            val img = Arguments.createMap()
            img.putString("type", preview.javaClass.simpleName)
            img.putString("uri", preview.uri)

            previews.pushMap(img)
        }

        val vendorData = Arguments.createMap()

        lens.vendorData.forEach() { data ->
            vendorData.putString(data.key, data.value)
        }

        map.putString("id", lens.id)
        map.putString("name", lens.name)
        map.putString("groupId", lens.groupId)
        map.putString("facingPreference", facingPreference)
        map.putArray("icons", icons)
        map.putArray("previews", previews)
        map.putMap("vendorData", vendorData)

        return map
    }
}