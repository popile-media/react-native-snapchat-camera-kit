//
//  CameraKitView+Helpers.swift
//  DemoApp
//
//  Created by Rıdvan Altun on 3.04.2023.
//

import AVKit

extension CameraKitView {
  /// Returns the current _interface_ orientation of the main window
  func windowInterfaceOrientation() -> AVCaptureVideoOrientation {
    var orientation: UIInterfaceOrientation;
    
    if #available(iOS 13.0, *) {
      orientation = UIApplication.shared.windows.first?.windowScene?.interfaceOrientation ?? .unknown
    } else {
      orientation = UIApplication.shared.statusBarOrientation
    }
    
    switch orientation {
    case .portrait:
      return AVCaptureVideoOrientation.portrait
    case .landscapeLeft:
      return AVCaptureVideoOrientation.landscapeLeft
    case .landscapeRight:
      return AVCaptureVideoOrientation.landscapeRight
    case .portraitUpsideDown:
      return AVCaptureVideoOrientation.portraitUpsideDown
    default:
      return AVCaptureVideoOrientation.portrait
    }
  }
}
