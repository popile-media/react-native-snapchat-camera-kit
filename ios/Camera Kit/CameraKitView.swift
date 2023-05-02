//
//  CameraKitView.swift
//  DemoApp
//
//  Created by Rıdvan Altun on 25.03.2023.
//

import Foundation
import UIKit
import SCSDKCameraKit

public final class CameraKitView: UIView, CustomCameraControllerUIDelegate {
    // Props
    @objc var isActive = false
    @objc var preset: NSString?
    @objc var initialLens: NSDictionary?
    @objc var initialCameraFacing: NSString?
    @objc var torch: NSDictionary? {
        didSet {
            // todo: handle back and ring light
            // ringLightView.ringLightGradient.updateIntensity(to: <#T##CGFloat#>, animated: <#T##Bool#>)
            // ringLightView.changeColor(to: <#T##UIColor#>)
        }
    }
    
    @objc var lensGroups: [String] = [] {
        didSet {
            cameraController?.groupIDs = lensGroups
        }
    }
    
    @objc var zoom: Bool = false {
        didSet {
            if (zoom) {
                isZoomConfigured = true
                setupZoomAction()
            }
            
            if (!zoom && isZoomConfigured) {
                isZoomConfigured = false
                removeZoomAction()
            }
        }
    }
    
    @objc var focus: Bool = false {
        didSet {
            if (focus) {
                isFocusConfigured = true
                setupTapToFocusAction()
            }
            
            if (!focus && isFocusConfigured) {
                isFocusConfigured = false
                removeTapToFocusAction()
            }
        }
    }
    
    // Events
    @objc var onInitialized: RCTDirectEventBlock?
    @objc var onLensChanged: RCTDirectEventBlock?
    @objc var onPhotoTaken: RCTBubblingEventBlock?
    @objc var onVideoRecordingFinished: RCTBubblingEventBlock?
    @objc var onError: RCTDirectEventBlock?
    
    // Internals
    
    public var cameraController: CustomCameraController?
    
    public var isZoomConfigured = false
    public var isFocusConfigured = false
    public var isInitialLensConfigured = false
    public var isPropsInitalized = false
    
    public var apiKey: String?
    public var applicationId: String?
    
    public var pinchGestureRecognizer: UIPinchGestureRecognizer?
    public var singleTap: UITapGestureRecognizer?
    
    public let previewView: PreviewView = {
        let view = PreviewView()
        view.clipsToBounds = true
        view.translatesAutoresizingMaskIntoConstraints = false
        return view
    }()
    
    public let ringLightView: RingLightView = {
        let view = RingLightView(frame: CGRect.zero)
        view.translatesAutoresizingMaskIntoConstraints = false
        return view
    }()
    
    required init(apiKey: String?, applicationId: String?) {
        self.apiKey = apiKey
        self.applicationId = applicationId
        
        super.init(frame: CGRect.zero)
        
        var sessionConfig: SessionConfig? = nil
        
        if (apiKey != nil && applicationId != nil) {
            sessionConfig = SessionConfig(
                applicationID: applicationId! as String,
                apiToken: apiKey! as String
            )
        }
        
        let errorHandler = CameraKitSessionErrorHandler() { [weak self] error in
            self?.invokeOnError(CameraError.cameraKit(CameraKitError.core(message: error.description)))
        }
        
        self.cameraController = CustomCameraController(
            sessionConfig: sessionConfig,
            errorHandler: errorHandler
        )
        
#if targetEnvironment(simulator)
        // todo: invoke error fails
        invokeOnError(.device(.notAvailableOnSimulator))
        return
#else
        setupView()
        setupRingLight()
#endif
    }
    
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
    override public final func didSetProps(_ changedProps: [String]!) {
        if isPropsInitalized == false {
            
            let shouldPresetConfigured = changedProps.contains("preset")
            
            do {
                setupCamera(preset: shouldPresetConfigured ? try AVCaptureSession.Preset(withString: preset! as String) : .hd1280x720)
            } catch _ {
                // todo: handle errors
            }
            
            
            
            isPropsInitalized = true
        }
    }
    
    internal final func applyInitialLens() {
        let initialLensId = self.initialLens?.value(forKey: "id")
        let launchData = self.initialLens?.value(forKey: "launchData")
        
        if (initialLensId == nil) {
            return
        }
        
        self.applyLensById(lensId: initialLensId as! NSString, lensGroups: self.lensGroups as NSArray, launchDataMap: launchData as! NSDictionary?, promise: nil)
        
        self.isInitialLensConfigured = true
    }
}
