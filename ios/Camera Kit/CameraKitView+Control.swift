//
//  CameraKitView+Control.swift
//  DemoApp
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
        self.cameraController?.zoomExistingLevel(by: factor)
        self.cameraController?.finalizeZoom()
        
        promise.resolve(nil)
        
        // todo: need test
    }
    
    func focusMethod(point: CGPoint, promise: Promise) {
        drawTapAnimationView(at: point)
        
        self.cameraController?.setPointOfInterest(at: point)
        
        promise.resolve(nil)
        
        // todo: need test
    }
    
    func adjustLensesVolume(mute: Bool, callback jsCallbackFunc: @escaping RCTResponseSenderBlock) {
        let err: NSNull = NSNull()
        
        self.cameraController?.cameraKit.lenses.processor?.setAudioMuted(mute) {
            jsCallbackFunc([mute, err])
        }
    }
}
