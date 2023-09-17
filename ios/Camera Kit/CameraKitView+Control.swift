//
//  CameraKitView+Control.swift
//  react-native-snapchat-camera-kit
//
//  Created by Rıdvan Altun on 4.04.2023.
//

extension CameraKitView {
  func flipCamera(promise: Promise) {
    withPromise(promise) {
      self.cameraController?.flipCamera()

      return CameraFacingModel(facing: self.cameraController?.cameraPosition).toString()
    }
  }

  func zoomMethod(factor: Double, promise: Promise) {
    cameraController?.zoomExistingLevel(by: factor)
    cameraController?.finalizeZoom()

    promise.resolve(nil)

    // TODO: need test
  }

  func focusMethod(point: CGPoint, promise: Promise) {
    drawTapAnimationView(at: point)

    cameraController?.setPointOfInterest(at: point)

    promise.resolve(nil)

    // TODO: need test
  }

  func adjustLensesVolume(mute: Bool, callback jsCallbackFunc: @escaping RCTResponseSenderBlock) {
    let err = NSNull()

    cameraController?.cameraKit.lenses.processor?.setAudioMuted(mute) {
      jsCallbackFunc([mute, err])
    }
  }
}
