//
//  URL+fileSize.swift
//  react-native-snapchat-camera-kit
//
//  Created by Rıdvan Altun on 16.04.2023.
//

public extension URL {
  var fileSize: Int? {
    let value = try? resourceValues(forKeys: [.fileSizeKey])
    return value?.fileSize
  }
}
