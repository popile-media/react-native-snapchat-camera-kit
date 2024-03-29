//
//  CameraKitSessionErrorHandler.swift
//  react-native-snapchat-camera-kit
//
//  Created by Rıdvan Altun on 10.04.2023.
//

import SCSDKCameraKit

public class CameraKitSessionErrorHandler: ErrorHandler {
  var handlerCallback: ((_ error: NSException) -> Void)?

  init(handlerCallback: ((_ error: NSException) -> Void)? = nil) {
    self.handlerCallback = handlerCallback
  }

  public func handleError(_ error: NSException) {
    handlerCallback!(error)
  }
}
