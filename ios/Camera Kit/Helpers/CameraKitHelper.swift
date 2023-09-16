//
//  CameraKitHelper.swift
//  DemoApp
//
//  Created by Rıdvan Altun on 10.04.2023.
//

enum CameraKitHelper {
    /// Check if the current environment is supported to run CameraKit Session.
    static func supported() -> Bool {
        let os = ProcessInfo().operatingSystemVersion

        let isMinimum12 = os.majorVersion >= 12
        let is64Bit = Int.bitWidth == 64
        let isSimulator = UIDevice.isSimulator
        let isMac = UIDevice.isMac

        return isMinimum12 && is64Bit && (isMac || !isSimulator)
    }
}
