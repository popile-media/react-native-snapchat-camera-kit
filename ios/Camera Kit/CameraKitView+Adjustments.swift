//
//  CameraKitView+Adjustments.swift
//  react-native-snapchat-camera-kit
//
//  Created by Rıdvan Altun on 7.04.2023.
//

extension CameraKitView {
  func checkToneModeSupporting(callback jsCallbackFunc: @escaping RCTResponseSenderBlock) {
    let err = NSNull()
    let status = cameraController?.checkToneModeSupporting()

    jsCallbackFunc([status, err])
  }

  func checkBlurSupporting(callback jsCallbackFunc: @escaping RCTResponseSenderBlock) {
    let err = NSNull()
    let status = cameraController?.checkBlurSupporting()

    jsCallbackFunc([status, err])
  }

  func adjustBlur(amount: Double) {
    cameraController?.adjustBlur(amount: amount)
  }

  func adjustTone(amount: Double) {
    cameraController?.adjustTone(amount: amount)
  }
}
