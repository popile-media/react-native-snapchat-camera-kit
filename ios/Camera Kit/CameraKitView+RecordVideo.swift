//
//  CameraKitView+RecordVideo.swift
//  react-native-snapchat-camera-kit
//
//  Created by Rıdvan Altun on 28.03.2023.
//

import AVFoundation

extension CameraKitView {
  func startRecording(options _: NSDictionary, promise: Promise) {
    withPromise(promise) {
//        var presetString = options.value(forKey: "preset") as? String
//        var sessionPreset: AVCaptureSession.Preset?
//
//        do {
//            var sessionPreset = try AVCaptureSession.Preset(withString: presetString!)
//        }

      self.cameraController?.startRecording()
    }
  }

  func pauseRecording(promise _: Promise) {
    // todo
  }

  func resumeRecording(promise _: Promise) {
    // todo
  }

  func cancelRecording(promise _: Promise) {
    // todo
  }

  func stopRecording(promise: Promise) {
    withPromise(promise) {
      self.cameraController?.finishRecording { url, error in
        if url != nil {
          self.invokeOnVideoRecordingFinished(path: url!)
        }

        if error != nil {
          // todo
        }
      }
    }
  }

  // Events

  final func invokeOnVideoRecordingFinished(path: URL) {
    guard let onVideoRecordingFinished = onVideoRecordingFinished else { return }

    onVideoRecordingFinished([
      "path": path.absoluteString,
    ])
  }
}
