//
//  CameraFacing.swift
//  DemoApp
//
//  Created by Rıdvan Altun on 27.03.2023.
//

import AVFoundation

public final class CameraFacingModel {
    private var facing: AVCaptureDevice.Position?

    init(facing: AVCaptureDevice.Position?) {
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
