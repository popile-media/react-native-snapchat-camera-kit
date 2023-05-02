//
//  Lens.swift
//  DemoApp
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
      "id": self.lens.id,
      "groupId": self.lens.groupId,
      "name": self.lens.name ?? "",
      "facingPreference": LensFacingPreferenceModel(facing: self.lens.facingPreference).toString(),
      "icons": (self.lens.iconUrl != nil) ? [[
        "uri": self.lens.iconUrl?.absoluteString,
        "type": nil
      ]] : [],
      "previews": (self.lens.preview.imageUrl != nil) ? [[
        "uri": self.lens.preview.imageUrl?.absoluteString,
        "type": nil
      ]] : [],
      "vendorData": self.lens.vendorData
    ]
  }
}
