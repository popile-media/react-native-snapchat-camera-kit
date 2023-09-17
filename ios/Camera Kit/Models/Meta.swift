//
//  Meta.swift
//  react-native-snapchat-camera-kit
//
//  Created by Rıdvan Altun on 9.04.2023.
//

public final class MetaModel {
  var supported: Bool

  init(supported: Bool) {
    self.supported = supported
  }

  func toBridge() -> [String: Any] {
    return [
      "supported": supported,
    ]
  }
}
