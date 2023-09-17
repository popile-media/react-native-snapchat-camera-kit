//
//  CameraKitView+Zoom.swift
//  react-native-snapchat-camera-kit
//
//  Created by Rıdvan Altun on 8.04.2023.
//

// MARK: Camera Zoom

public extension CameraKitView {
  /// Zooms the camera based on a pinch gesture
  /// - Parameter sender: the caller
  @objc func zoom(sender: UIPinchGestureRecognizer) {
    switch sender.state {
    case .changed:
      cameraController?.zoomExistingLevel(by: sender.scale)
    case .ended:
      cameraController?.finalizeZoom()
    default:
      break
    }
  }
}
