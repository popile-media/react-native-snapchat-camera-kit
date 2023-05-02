//
//  CameraKitViewManager.swift
//  DemoApp
//
//  Created by Rıdvan Altun on 25.03.2023.
//

import Foundation
import SCSDKCameraKit

@objc(CameraKitViewManager)
final class CameraKitViewManager: RCTViewManager {
    
    var apiKey: String? = nil
    var applicationId: String? = nil
    
    override final func view() -> UIView! {
        return CameraKitView(apiKey: apiKey, applicationId: applicationId)
    }
    
    // Camera View Functions - (Recording)
    
    @objc
    final func startRecording(_ node: NSNumber, options: NSDictionary, resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
        let promise = Promise(resolver: resolve, rejecter: reject)
        let component = getCameraKitView(withTag: node)
        component.startRecording(options: options, promise: promise)
    }
    
    @objc
    final func pauseRecording(_ node: NSNumber, resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
        let promise = Promise(resolver: resolve, rejecter: reject)
        let component = getCameraKitView(withTag: node)
        component.pauseRecording(promise: promise)
    }
    
    @objc
    final func resumeRecording(_ node: NSNumber, resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
        let promise = Promise(resolver: resolve, rejecter: reject)
        let component = getCameraKitView(withTag: node)
        component.resumeRecording(promise: promise)
    }
    
    @objc
    final func cancelRecording(_ node: NSNumber, resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
        let promise = Promise(resolver: resolve, rejecter: reject)
        let component = getCameraKitView(withTag: node)
        component.cancelRecording(promise: promise)
    }
    
    @objc
    final func stopRecording(_ node: NSNumber, resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
        let promise = Promise(resolver: resolve, rejecter: reject)
        let component = getCameraKitView(withTag: node)
        component.stopRecording(promise: promise)
    }
    
    // Camera View Functions - (Miscellaneous)
    
    @objc
    final func takePhoto(_ node: NSNumber, options: NSDictionary, resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
        let promise = Promise(resolver: resolve, rejecter: reject)
        let component = getCameraKitView(withTag: node)
        component.takePhoto(options: options, promise: promise)
    }
    
    @objc
    final func flipCamera(_ node: NSNumber, resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
        let promise = Promise(resolver: resolve, rejecter: reject)
        let component = getCameraKitView(withTag: node)
        component.flipCamera(promise: promise)
    }
    
    @objc
    final func zoom(_ node: NSNumber, factor: Double, resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
        let promise = Promise(resolver: resolve, rejecter: reject)
        let component = getCameraKitView(withTag: node)
        component.zoomMethod(factor: factor, promise: promise)
    }
    
    @objc
    final func focus(_ node: NSNumber, x: Double, y: Double, resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
        let promise = Promise(resolver: resolve, rejecter: reject)
        let component = getCameraKitView(withTag: node)
        component.focusMethod(point: CGPoint(x: x, y: y), promise: promise)
    }
    
    @objc
    final func clearLenses(_ node: NSNumber, onClearLensCallback: @escaping RCTResponseSenderBlock) {
        let component = getCameraKitView(withTag: node)
        component.clearLenses(callback: onClearLensCallback)
    }
    
    @objc
    final func adjustLensesVolume(_ node: NSNumber, mute: Bool, onAdjustLensesVolumeCallback: @escaping RCTResponseSenderBlock) {
        let component = getCameraKitView(withTag: node)
        component.adjustLensesVolume(mute: mute, callback: onAdjustLensesVolumeCallback)
    }
    
    @objc
    final func getLensesByGroupId(_ node: NSNumber, lensGroups: NSArray, onGetLensesByGroupIdCallback: @escaping RCTResponseSenderBlock) {
        let component = getCameraKitView(withTag: node)
        component.getLensesByGroupId(lensGroups: lensGroups, callback: onGetLensesByGroupIdCallback)
    }
    
    @objc
    final func changeLensById(_ node: NSNumber, lensId: NSString, lensGroups: NSArray, launchDataMap: NSDictionary?, resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
        let promise = Promise(resolver: resolve, rejecter: reject)
        let component = getCameraKitView(withTag: node)
        
        component.applyLensById(
            lensId: lensId,
            lensGroups: lensGroups,
            launchDataMap: launchDataMap,
            promise: promise
        )
    }
    
    @objc
    final func checkBlurSupporting(_ node: NSNumber, onCheckBlurSupportingCallback: @escaping RCTResponseSenderBlock) {
        let component = getCameraKitView(withTag: node)
        component.checkBlurSupporting(callback: onCheckBlurSupportingCallback)
    }
    
    @objc
    final func checkToneModeSupporting(_ node: NSNumber, onCheckToneModeSupportingCallback: @escaping RCTResponseSenderBlock) {
        let component = getCameraKitView(withTag: node)
        component.checkToneModeSupporting(callback: onCheckToneModeSupportingCallback)
    }
    
    @objc
    final func adjustBlur(_ node: NSNumber, amount: NSNumber) {
        let component = getCameraKitView(withTag: node)
        let doubleAmount = Double(truncating: amount)
        component.adjustBlur(amount: doubleAmount)
    }
    
    @objc
    final func adjustTone(_ node: NSNumber, amount: NSNumber) {
        let component = getCameraKitView(withTag: node)
        let doubleAmount = Double(truncating: amount)
        component.adjustTone(amount: doubleAmount)
    }
    
    // Miscellaneous Functions
    
    @objc
    final func initMethod(_ options: NSDictionary) {
        self.apiKey = options.value(forKey: "apiKey") as? String
        self.applicationId = options.value(forKey: "applicationId") as? String
    }
    
    @objc
    final func getMetadata(_ onGetMetadataCallback: RCTResponseSenderBlock) {
        let err: NSNull = NSNull()
        
        let supported = CameraKitHelper.supported()
        
        let meta = MetaModel(supported: supported).toBridge()
        
        onGetMetadataCallback([meta, err])
    }
    
    private func getCameraKitView(withTag tag: NSNumber) -> CameraKitView {
        // swiftlint:disable force_cast
        return bridge.uiManager.view(forReactTag: tag) as! CameraKitView
    }
}
