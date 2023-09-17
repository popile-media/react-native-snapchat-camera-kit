//
//  CameraKitView+Effects.swift
//  react-native-snapchat-camera-kit
//
//  Created by Rıdvan Altun on 28.03.2023.
//

import SCSDKCameraKit

extension CameraKitView {
  func applyLensById(lensId: NSString, lensGroups: NSArray, launchDataMap: NSDictionary?, promise: Promise?) {
    var lens: Lens?

    lensGroups.forEach { groupID in
      // swiftlint:disable force_cast
      lens = self.cameraController?.cameraKit.lenses.repository.lens(id: lensId as String, groupID: groupID as! String)
      // swiftlint:enable force_cast
    }

    if lens != nil {
      var launcData: LensLaunchData?

      if launchDataMap != nil {
        launcData = CustomLensLaunchData.fromBridge(data: launchDataMap!)
      }

      cameraController?.applyLens(lens!, launchData: launcData) { status in
        promise?.resolve(status)
      }
    } else {
      // TODO: lens not found
    }
  }

  func getLensesByGroupId(lensGroups: NSArray, callback jsCallbackFunc: @escaping RCTResponseSenderBlock) {
    let lenses: NSMutableArray = []
    let err = NSNull()

    lensGroups.forEach { groupId in
      // swiftlint:disable force_cast
      self.cameraController?.cameraKit.lenses.repository.lenses(groupID: groupId as! String).forEach { lens in
        let lensObject = LensModel(lens: lens).toBridge()

        lenses.add(lensObject)
      }
      // swiftlint:enable force_cast
    }

    jsCallbackFunc([lenses as? [Any]? as Any, err])
  }

  func clearLenses(callback jsCallbackFunc: @escaping RCTResponseSenderBlock) {
    let err = NSNull()

    cameraController?.clearLens { status in
      jsCallbackFunc([status, err])
    }
  }
}
