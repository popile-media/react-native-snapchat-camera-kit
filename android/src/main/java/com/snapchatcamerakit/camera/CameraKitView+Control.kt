package com.snapchatcamerakit.camera

import android.graphics.Point;
import android.util.Size
import com.facebook.react.bridge.Callback
import com.snap.camerakit.lenses.LensesComponent
import com.snap.camerakit.support.camera.AllowsCameraPreview
import com.snapchatcamerakit.camera.errors.CameraNotReadyError

fun CameraKitView.flipCamera() {
    if (cameraKitSession == null) {
        throw CameraNotReadyError()
    }

  (activeImageProcessorSource as? AllowsCameraPreview)?.startPreview(!isCameraFacingFront)
    isCameraFacingFront = !isCameraFacingFront
}

fun CameraKitView.zoom(factor: Float) {
    if (cameraKitSession == null) {
        throw CameraNotReadyError()
    }

    // (activeImageProcessorSource as? AllowsCameraPreview)?.zoomBy(factor)

    // todo: not works
}

fun CameraKitView.focus(point: Point) {
    if (cameraKitSession == null) {
        throw CameraNotReadyError()
    }

    // (activeImageProcessorSource as? AllowsCameraPreview)?.focusAndMeterOn(point.x.toFloat(), point.y.toFloat(), Size(width, height))

    // todo: is it work? not sure
}

fun CameraKitView.adjustLensesVolume(mute: Boolean, callback: Callback) {
  if (cameraKitSession == null) {
    throw CameraNotReadyError()
  }

  val adjustVolume = if (mute) {
    LensesComponent.Audio.Adjustment.Volume.Mute
  } else {
    LensesComponent.Audio.Adjustment.Volume.UnMute
  }

  cameraKitSession!!.lenses.audio.adjust(adjustVolume) { success ->
    callback(success, null)
  }
}
