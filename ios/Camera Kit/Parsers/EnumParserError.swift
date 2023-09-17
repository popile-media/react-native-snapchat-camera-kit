//
//  EnumParserError.swift
//  react-native-snapchat-camera-kit
//
//  Created by Rıdvan Altun on 14.04.2023.
//

import Foundation

/**
 An error raised when the given descriptor (TypeScript string union type) cannot be parsed and converted to a Swift enum.
 */
enum EnumParserError: Error {
  /**
   Raised when the descriptor is not supported on the current OS.
   */
  case unsupportedOS(supportedOnOS: String)
  /**
   Raised when the descriptor does not match any of the possible values.
   */
  case invalidValue
}
