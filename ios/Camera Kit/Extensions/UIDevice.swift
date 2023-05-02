//
//  UIDevice.swift
//  DemoApp
//
//  Created by Rıdvan Altun on 10.04.2023.
//

extension UIDevice {
  static var isSimulator: Bool = {
#if targetEnvironment(simulator)
    return true
#else
    return false
#endif
  }()
  
  static var isMac: Bool = {
    if #available(iOS 14.0, *) {
      return ProcessInfo.processInfo.isiOSAppOnMac || ProcessInfo.processInfo.isMacCatalystApp
    } else if #available(iOS 13.0, *) {
      return ProcessInfo.processInfo.isMacCatalystApp
    } else {
      return false
    }
  }()
}
