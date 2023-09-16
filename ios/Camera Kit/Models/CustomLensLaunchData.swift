//
//  CustomLensLaunchData.swift
//  DemoApp
//
//  Created by Rıdvan Altun on 6.04.2023.
//

import SCSDKCameraKit

public enum CustomLensLaunchData {
    static var empty = EmptyLensLaunchData()
    static func fromBridge(data: NSDictionary) -> LensLaunchData {
        let launchDataBuild = LensLaunchDataBuilder()

        for (key, value) in data {
            switch value {
            case _ as NSNumber:
                launchDataBuild.add(number: value as! NSNumber, key: key as! String)

            case _ as String:
                launchDataBuild.add(string: value as! String, key: key as! String)

            case _ as [NSNumber]:
                launchDataBuild.add(numberArray: value as! [NSNumber], key: key as! String)

            case _ as [String]:
                launchDataBuild.add(stringArray: value as! [String], key: key as! String)

            default:
                // ignore other types
                break
            }
        }

        return launchDataBuild.launchData ?? EmptyLensLaunchData()
    }
}
