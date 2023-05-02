//
//  VideoUtilsModule.m
//  CocoaAsyncSocket
//
//  Created by Rıdvan Altun on 18.04.2023.
//

#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(VideoUtilsModule, NSObject)

RCT_EXTERN_METHOD(getMetadata:(NSString *)path resolve:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject);

@end
