//  Copyright Snap Inc. All rights reserved.
//  CameraKit
import Foundation

// MARK: - TestableElement

/// Describes an element that can be UI tested
public protocol TestableElement {
  /// identifier for the testable element
  var id: String { get }
}

public extension TestableElement where Self: RawRepresentable {
  var id: String {
    return "\(String(describing: type(of: self)))_\(rawValue)"
  }
}

// MARK: - OtherElements

/// Other misc testable elements
public enum OtherElements: String, TestableElement {
  case tapToFocusView
}
