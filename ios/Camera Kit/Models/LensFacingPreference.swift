//
//  LensFacingPreference.swift
//  react-native-snapchat-camera-kit
//
//  Created by Rıdvan Altun on 28.03.2023.
//

import SCSDKCameraKit

public final class LensFacingPreferenceModel {
  private var facing: LensFacingPreference

  init(facing: LensFacingPreference) {
    self.facing = facing
  }

  func toString() -> String {
    switch facing {
    case .back:
      return "back"
    case .front:
      return "front"
    default:
      return "unspecified"
    }
  }
}
