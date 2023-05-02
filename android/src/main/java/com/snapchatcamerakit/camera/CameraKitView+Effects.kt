package com.snapchatcamerakit.camera

import com.snapchatcamerakit.camera.errors.CameraNotReadyError
import com.snapchatcamerakit.camera.errors.CameraKitLensNotFoundError
import com.snapchatcamerakit.camera.models.Lens
import com.snapchatcamerakit.utils.DataUtils
import com.snapchatcamerakit.camera.models.CustomLensLaunchData
import com.facebook.react.bridge.*
import com.snap.camerakit.lenses.LensesComponent
import com.snap.camerakit.lenses.whenHasSome

fun CameraKitView.applyLensById(lensId: String, lensGroups: ReadableArray, launchDataMap: ReadableMap?, promise: Promise?) {
    if (this.cameraKitSession == null) {
        throw CameraNotReadyError()
    }

    val groupIds = DataUtils.readableArrayToStringSet(lensGroups)

    this.cameraKitSession!!.lenses.repository.get(LensesComponent.Repository.QueryCriteria.Available(groupIds)) { result ->
        result.whenHasSome { lenses ->
            val lens: LensesComponent.Lens? = lenses.find { _lens -> _lens.id == lensId }
                ?: throw CameraKitLensNotFoundError(id = lensId)

            if (lens != null) {
                val launchData = if (launchDataMap == null) CustomLensLaunchData.empty else CustomLensLaunchData.fromBridge(launchDataMap)

                this.cameraKitSession!!.lenses.processor.apply(lens, launchData) { status ->
                    promise?.resolve(status)
                }
            } else {
                promise?.reject(CameraKitLensNotFoundError(lensId))
            }
        }
    }
}

fun CameraKitView.getLensesByGroupId(lensGroups: ReadableArray, callback: Callback) {
    if (this.cameraKitSession == null) {
        throw CameraNotReadyError()
    }

    val groupIds = DataUtils.readableArrayToStringSet(lensGroups)

    val list = Arguments.createArray()

    this.cameraKitSession!!.lenses.repository.get(LensesComponent.Repository.QueryCriteria.Available(groupIds)) { result ->
        result.whenHasSome { lenses ->
            lenses.forEach() { lens ->
                val lensInstance = Lens(lens)
                list.pushMap(lensInstance.toBridge())
            }
        }

        callback(list, null)
    }
}

fun CameraKitView.clearLenses(callback: Callback) {
    if (this.cameraKitSession == null) {
        throw CameraNotReadyError()
    }

    this.cameraKitSession!!.lenses.processor.clear { success ->
      callback(success, null)
    }
}
