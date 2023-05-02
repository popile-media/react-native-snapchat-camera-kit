package com.snapchatcamerakit.camera.models

import com.snapchatcamerakit.utils.DataUtils
import com.facebook.react.bridge.ReadableMap
import com.facebook.react.bridge.ReadableMapKeySetIterator
import com.facebook.react.bridge.ReadableType
import com.snap.camerakit.lenses.LensesComponent
import com.snap.camerakit.lenses.invoke

class CustomLensLaunchData {
    companion object {
        val empty = LensesComponent.Lens.LaunchData.Empty
        fun fromBridge(data: ReadableMap): LensesComponent.Lens.LaunchData {
            return LensesComponent.Lens.LaunchData {
                val iterator: ReadableMapKeySetIterator = data.keySetIterator()

                while (iterator.hasNextKey()) {
                    val key = iterator.nextKey()

                    when (data.getType(key)) {
                        ReadableType.Number -> putNumber(key, data.getInt(key))
                        ReadableType.String -> putString(key, data.getString(key)!!)
                        ReadableType.Array -> {
                            val arr = data.getArray(key)

                            if (arr != null) {
                                val isNumberArr = DataUtils.checkReadableArrayItemsType(arr, ReadableType.Number)
                                val isStringArr = DataUtils.checkReadableArrayItemsType(arr, ReadableType.String)

                                if (isNumberArr) {
                                    val numArr = DataUtils.readableArrayToNumberArray(arr)
                                    putNumbers(key, *numArr as Array<Number>)
                                }

                                if (isStringArr) {
                                    val strArr = DataUtils.readableArrayToStringArray(arr)
                                    putStrings(key, *strArr as Array<String>)
                                }
                            }
                        }
                        else -> {
                            // ignore other types (null, map, boolean)
                            // witch not not supported by snapchat
                        }
                    }
                }
            }
        }
    }
}