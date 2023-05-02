//
//  VideoUtilsModule.swift
//  CocoaAsyncSocket
//
//  Created by Rıdvan Altun on 18.04.2023.
//

import AVFoundation
import Foundation

@objc(VideoUtilsModule)
class VideoUtilsModule: NSObject {
    
    @objc
    static func requiresMainQueueSetup() -> Bool {
        return true
    }
    
    @objc
    final func getMetadata(_ path: String, resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
        
        let pathUrl = URL(string: path)!
        let asset = AVURLAsset(url: pathUrl)
        let duration = asset.duration.seconds
        
        let track = asset.tracks(withMediaType: .video).first! as AVAssetTrack
        let naturalSize = track.naturalSize
        let t = track.preferredTransform
        let isPortrait = t.a == 0 && abs(t.b) == 1 && t.d == 0
        
        let width = Int(isPortrait ? naturalSize.height : naturalSize.width)
        let height = Int(isPortrait ? naturalSize.width : naturalSize.height)
        
        let frameRate = Double(track.nominalFrameRate)
        
        let size = pathUrl.fileSize!
                
        resolve([
            "path": path,
            "duration": Int(duration),
            "frameRate": frameRate,
            "size": size,
            "height": height,
            "width": width,
        ] as [String : Any])
    }
}
