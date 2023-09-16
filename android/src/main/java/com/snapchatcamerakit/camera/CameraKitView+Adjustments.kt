package com.snapchatcamerakit.camera

import com.facebook.react.bridge.Callback
import com.snap.camerakit.adjustments.AdaptiveToneMappingAdjustment
import com.snap.camerakit.adjustments.AdaptiveToneMappingAdjustment.amount
import com.snap.camerakit.adjustments.PortraitAdjustment
import com.snap.camerakit.adjustments.PortraitAdjustment.blur
import com.snap.camerakit.adjustments.whenApplied
import com.snapchatcamerakit.camera.errors.CameraNotReadyError

fun CameraKitView.checkToneModeSupporting(callback: Callback) {
  if (cameraKitSession == null) {
    throw CameraNotReadyError()
  }

  cameraKitSession!!.adjustments.processor.available(AdaptiveToneMappingAdjustment) { available ->
    callback(available, null)
  }
}

fun CameraKitView.checkBlurSupporting(callback: Callback) {
  if (cameraKitSession == null) {
    throw CameraNotReadyError()
  }

  cameraKitSession!!.adjustments.processor.available(PortraitAdjustment) { available ->
    callback(available, null)
  }
}

fun CameraKitView.adjustBlur(amount: Double) {
  cameraKitSession!!.adjustments.processor.apply(PortraitAdjustment) { result ->
    result.whenApplied { applied ->
      applied.controller.blur = amount.toFloat()
    }
  }
}

fun CameraKitView.adjustTone(amount: Double) {
  cameraKitSession!!.adjustments.processor.apply(AdaptiveToneMappingAdjustment) { result ->
    result.whenApplied { applied ->
      applied.controller.amount = amount.toFloat()
    }
  }
}
