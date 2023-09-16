//
//  CameraKitView+Setup.swift
//  DemoApp
//
//  Created by Rıdvan Altun on 8.04.2023.
//

import AVFoundation

// MARK: General Camera Setup

extension CameraKitView {
    /// handle camera setup
    func setupCamera(preset: AVCaptureSession.Preset) {
        cameraController?.configure(
            orientation: windowInterfaceOrientation(),
            textInputContextProvider: nil,
            agreementsPresentationContextProvider: nil,
            preset: preset,
            completion: nil
        )

        cameraController?.cameraKit.add(output: previewView)
        cameraController?.uiDelegate = self
    }

    /// create main view
    func setupView() {
        addSubview(previewView)
        NSLayoutConstraint.activate([
            previewView.leadingAnchor.constraint(equalTo: leadingAnchor),
            previewView.trailingAnchor.constraint(equalTo: trailingAnchor),
            previewView.topAnchor.constraint(equalTo: topAnchor),
            previewView.bottomAnchor.constraint(equalTo: bottomAnchor),
        ])
    }

    /// create ring light view
    func setupRingLight() {
        addSubview(ringLightView)
        NSLayoutConstraint.activate([
            ringLightView.leadingAnchor.constraint(equalTo: leadingAnchor),
            ringLightView.trailingAnchor.constraint(equalTo: trailingAnchor),
            ringLightView.topAnchor.constraint(equalTo: topAnchor),
            ringLightView.bottomAnchor.constraint(equalTo: bottomAnchor),
        ])
    }

    /// add ability to zoom
    func setupZoomAction() {
        pinchGestureRecognizer = UIPinchGestureRecognizer(target: self, action: #selector(zoom(sender:)))
        previewView.addGestureRecognizer(pinchGestureRecognizer!)
        previewView.automaticallyConfiguresTouchHandler = true
    }

    /// remove ability to zoom
    func removeZoomAction() {
        previewView.removeGestureRecognizer(pinchGestureRecognizer!)
        previewView.automaticallyConfiguresTouchHandler = false
    }

    /// add ability to focus
    func setupTapToFocusAction() {
        singleTap = UITapGestureRecognizer(target: self, action: #selector(handleSingleTap(sender:)))
        previewView.addGestureRecognizer(singleTap!)
    }

    /// remove ability to focus
    func removeTapToFocusAction() {
        previewView.removeGestureRecognizer(singleTap!)
    }
}
