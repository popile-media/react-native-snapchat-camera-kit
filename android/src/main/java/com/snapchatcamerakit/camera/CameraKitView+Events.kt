package com.snapchatcamerakit.camera

import android.util.Log
import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.ReactContext
import com.facebook.react.bridge.WritableMap
import com.facebook.react.uimanager.events.RCTEventEmitter
import com.snapchatcamerakit.camera.enums.Events
import com.snapchatcamerakit.camera.errors.CameraError
import com.snapchatcamerakit.camera.errors.ErrorHelper
import com.snapchatcamerakit.camera.errors.UnknownCameraError
import com.snapchatcamerakit.camera.models.Lens

fun invokeOnInitialized(view: CameraKitView) {
  Log.i(CameraKitView.TAG, "invokeOnInitialized()")

  (view.context as ReactContext)
    .getJSModule(RCTEventEmitter::class.java)
    .receiveEvent(
      view.id,
      Events.ON_INITIALIZED,
      null,
    )
}

fun invokeOnLensChanged(
  view: CameraKitView,
  status: String,
  lens: Lens?,
) {
  Log.i(CameraKitView.TAG, "invokeOnLensChanged()")

  var map: WritableMap = Arguments.createMap()
  map.putString("status", status)

  if (lens !== null) {
    map.putMap("lens", lens.toBridge())
  }

  (view.context as ReactContext)
    .getJSModule(RCTEventEmitter::class.java)
    .receiveEvent(
      view.id,
      Events.ON_LENS_CHANGED,
      map,
    )
}

fun invokeOnPhotoTaken(
  view: CameraKitView,
  data: WritableMap,
) {
  Log.i(CameraKitView.TAG, "invokeOnPhotoTaken()")

  (view.context as ReactContext)
    .getJSModule(RCTEventEmitter::class.java)
    .receiveEvent(
      view.id,
      Events.ON_PHOTO_TAKEN,
      data,
    )
}

fun invokeOnVideoRecordingFinished(
  view: CameraKitView,
  uri: String,
) {
  Log.i(CameraKitView.TAG, "invokeOnVideoRecordingFinished()")

  val data: WritableMap = Arguments.createMap()

  data.putString("path", uri)

  (view.context as ReactContext)
    .getJSModule(RCTEventEmitter::class.java)
    .receiveEvent(
      view.id,
      Events.ON_VIDEO_RECORDING_FINISHED,
      data,
    )
}

fun invokeOnError(
  view: CameraKitView,
  error: Throwable,
) {
  Log.i(CameraKitView.TAG, "invokeOnError()")

  var errorMap: WritableMap = Arguments.createMap()
  val err =
    if (error is CameraError) error else UnknownCameraError(error)

  errorMap.putString("code", ErrorHelper.getCode(err))
  errorMap.putString("message", err.message)

  val cause: Throwable? = err.cause

  if (cause != null) {
    errorMap.putString("stacktrace", err.stackTraceToString())
  }

  (view.context as ReactContext)
    .getJSModule(RCTEventEmitter::class.java)
    .receiveEvent(
      view.id,
      Events.ON_ERROR,
      errorMap,
    )
}
