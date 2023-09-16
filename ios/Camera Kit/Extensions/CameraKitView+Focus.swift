//
//  CameraKitView+Focus.swift
//  DemoApp
//
//  Created by Rıdvan Altun on 8.04.2023.
//

// MARK: Camera Point of Interest

public extension CameraKitView {
    /// Handles a single tap gesture by dismissing the tone map control if it is visible and setting the point
    /// of interest otherwise.
    /// - Parameter sender: The single tap gesture recognizer.
    @objc func handleSingleTap(sender: UITapGestureRecognizer) {
        setPointOfInterest(sender: sender)
    }

    func drawTapAnimationView(at point: CGPoint) {
        let view = TapAnimationView(center: point)
        addSubview(view)

        view.show()
    }

    /// Sets the camera's point of interest for focus and exposure based on where the user tapped
    /// - Parameter sender: the caller
    @objc fileprivate func setPointOfInterest(sender: UITapGestureRecognizer) {
        drawTapAnimationView(at: sender.location(in: sender.view))

        guard let focusPoint = sender.captureDevicePoint else { return }

        cameraController?.setPointOfInterest(at: focusPoint)
    }
}
