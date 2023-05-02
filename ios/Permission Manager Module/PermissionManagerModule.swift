//
//  PermissionManagerModule.swift
//  DemoApp
//
//  Created by Rıdvan Altun on 20.03.2023.
//

import AVFoundation
import Foundation

@objc(PermissionManagerModule)
class PermissionManagerModule: NSObject {

  @objc
  static func requiresMainQueueSetup() -> Bool {
    return true
  }

  @objc
    final func getCameraPermissionStatus(_ resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
      withPromise(resolve: resolve, reject: reject) {
        let status = AVCaptureDevice.authorizationStatus(for: .video)

        switch status.rawValue {
          case 0:
              return "not-determined"

          case 1:
            return "restricted"

          case 2:
            return "denied"

          case 3:
            return "authorized"

          default:
            return "not-determined"
        }
      }
    }

    @objc
    final func getMicrophonePermissionStatus(_ resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
      withPromise(resolve: resolve, reject: reject) {
        let status = AVCaptureDevice.authorizationStatus(for: .audio)

        switch status.rawValue {
          case 0:
              return "not-determined"

          case 1:
            return "restricted"

          case 2:
            return "denied"

          case 3:
            return "authorized"

          default:
            return "not-determined"
        }
      }
    }

    @objc
    final func requestCameraPermission(_ resolve: @escaping RCTPromiseResolveBlock, reject _: @escaping RCTPromiseRejectBlock) {
      AVCaptureDevice.requestAccess(for: .video) { granted in
        resolve(granted ? "authorized" : "denied")
      }
    }

    @objc
    final func requestMicrophonePermission(_ resolve: @escaping RCTPromiseResolveBlock, reject _: @escaping RCTPromiseRejectBlock) {
      AVCaptureDevice.requestAccess(for: .audio) { granted in
        resolve(granted ? "authorized" : "denied")
      }
    }
}
