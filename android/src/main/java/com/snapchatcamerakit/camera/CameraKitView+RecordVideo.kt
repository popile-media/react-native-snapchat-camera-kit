package com.snapchatcamerakit.camera

import android.net.Uri
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReadableMap
import com.snap.camerakit.ImageProcessor
import com.snap.camerakit.outputFrom
import com.snapchatcamerakit.camera.errors.CameraNotReadyError
import com.snapchatcamerakit.camera.errors.NoRecordingInProgressError
import com.snapchatcamerakit.camera.errors.RecorderError
import com.snapchatcamerakit.camera.errors.RecordingInProgressError
import com.snapchatcamerakit.camera.models.Resolution
import com.snapchatcamerakit.camera.video.MediaCapture
import com.snapchatcamerakit.camera.video.MediaCapture.MediaCaptureCallback
import java.io.Closeable
import java.io.File
import java.util.*

fun CameraKitView.startRecording(
  options: ReadableMap,
  promise: Promise,
) {
  if (cameraKitSession == null) {
    throw CameraNotReadyError()
  }

  if (recordingCloseable != null) {
    throw RecordingInProgressError()
  }

  promise.resolve(null)

  val mediaCaptureCallback: MediaCaptureCallback =
    object : MediaCaptureCallback {
      override fun onSaved(file: File) {
        val uri: String = Uri.parse(file.absolutePath).toString()

        invokeOnVideoRecordingFinished(ref, uri)
      }

      override fun onError(error: Exception) {
        // todo: handle error, set an error class
        val invokedErr = RecorderError(error)

        invokeOnError(ref, invokedErr)
      }
    }

  val videoPath = context.cacheDir.path + File.separator + UUID.randomUUID() + ".mp4"

  val outputCloseable: Closeable
  val captureCloseable =
    MediaCapture(
      captureCallback = mediaCaptureCallback,
      file = File(videoPath),
      audioSource = audioProcessorSource,
      resolution = Resolution.fromString(options.getString("resolution")),
      fps = if (options.hasKey("fps")) options.getInt("fps") else 30,
    ).also {
      // Get encoding surface and connect it as image processor output
      // Retain closeable for disconnecting output when done
      outputCloseable =
        cameraKitSession!!.processor.connectOutput(
          outputFrom(it.surface, ImageProcessor.Output.Purpose.RECORDING),
        )
    }

  recordingCloseable =
    Closeable {
      outputCloseable.close()
      captureCloseable.close()
    }
}

fun CameraKitView.pauseRecording() {
  if (cameraKitSession == null) {
    throw CameraNotReadyError()
  }

  if (recordingCloseable == null) {
    throw NoRecordingInProgressError()
  }

  // todo
}

fun CameraKitView.resumeRecording() {
  if (cameraKitSession == null) {
    throw CameraNotReadyError()
  }

  if (recordingCloseable == null) {
    throw NoRecordingInProgressError()
  }

  // todo
}

fun CameraKitView.cancelRecording() {
  if (cameraKitSession == null) {
    throw CameraNotReadyError()
  }

  if (recordingCloseable == null) {
    throw NoRecordingInProgressError()
  }

  // todo
}

fun CameraKitView.stopRecording() {
  if (cameraKitSession == null) {
    throw CameraNotReadyError()
  }

  if (recordingCloseable == null) {
    throw NoRecordingInProgressError()
  }

  recordingCloseable!!.close()
  recordingCloseable = null
}
