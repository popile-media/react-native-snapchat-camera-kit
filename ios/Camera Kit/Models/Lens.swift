//
//  Lens.swift
//  react-native-snapchat-camera-kit
//
//  Created by Rıdvan Altun on 28.03.2023.
//

import SCSDKCameraKit

public final class LensModel {
  var lens: Lens

  init(lens: Lens) {
    self.lens = lens
  }

  func toBridge() -> [String: Any] {
    return [
      "id": lens.id,
      "groupId": lens.groupId,
      "name": lens.name ?? "",
      "facingPreference": LensFacingPreferenceModel(facing: lens.facingPreference).toString(),
      "icons": (lens.iconUrl != nil) ? [[
        "uri": lens.iconUrl?.absoluteString,
        "type": nil,
      ]] : [],
      "previews": (lens.preview.imageUrl != nil) ? [[
        "uri": lens.preview.imageUrl?.absoluteString,
        "type": nil,
      ]] : [],
      "vendorData": lens.vendorData,
    ]
  }
}
