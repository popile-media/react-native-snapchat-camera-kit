//
//  CameraKitView+Zoom.swift
//  DemoApp
//
//  Created by Rıdvan Altun on 8.04.2023.
//

// MARK: Camera Zoom

extension CameraKitView {
  /// Zooms the camera based on a pinch gesture
  /// - Parameter sender: the caller
  @objc public func zoom(sender: UIPinchGestureRecognizer) {
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
