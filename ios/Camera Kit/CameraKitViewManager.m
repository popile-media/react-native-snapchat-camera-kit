//
//  CameraKitViewManager.m
//  react-native-snapchat-camera-kit
//
//  Created by Rıdvan Altun on 25.03.2023.
//

#import <Foundation/Foundation.h>

#import <React/RCTViewManager.h>

@interface RCT_EXTERN_REMAP_MODULE(CameraKitView, CameraKitViewManager, RCTViewManager)

- (dispatch_queue_t)methodQueue
{
  return dispatch_get_main_queue();
}

+ (BOOL)requiresMainQueueSetup
{
  return YES;
}

// Camera View Properties
RCT_EXPORT_VIEW_PROPERTY(isActive, BOOL);
RCT_EXPORT_VIEW_PROPERTY(preset, NSString);
RCT_EXPORT_VIEW_PROPERTY(initialLens, NSDictionary);
RCT_EXPORT_VIEW_PROPERTY(initialCameraFacing, NSString);
RCT_EXPORT_VIEW_PROPERTY(lensGroups, NSArray);
RCT_EXPORT_VIEW_PROPERTY(zoom, BOOL);
RCT_EXPORT_VIEW_PROPERTY(focus, BOOL);
RCT_EXPORT_VIEW_PROPERTY(torch, NSDictionary);

// Camera View Events
RCT_EXPORT_VIEW_PROPERTY(onInitialized, RCTDirectEventBlock);
RCT_EXPORT_VIEW_PROPERTY(onLensChanged, RCTDirectEventBlock);
RCT_EXPORT_VIEW_PROPERTY(onPhotoTaken, RCTBubblingEventBlock);
RCT_EXPORT_VIEW_PROPERTY(onVideoRecordingFinished, RCTBubblingEventBlock);
RCT_EXPORT_VIEW_PROPERTY(onError, RCTDirectEventBlock);

// Camera View Functions - (Recording)
RCT_EXTERN_METHOD(startRecording:(nonnull NSNumber *)node options:(NSDictionary *)options resolve:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject);
RCT_EXTERN_METHOD(pauseRecording:(nonnull NSNumber *)node resolve:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject);
RCT_EXTERN_METHOD(resumeRecording:(nonnull NSNumber *)node resolve:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject);
RCT_EXTERN_METHOD(cancelRecording:(nonnull NSNumber *)node resolve:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject);
RCT_EXTERN_METHOD(stopRecording:(nonnull NSNumber *)node resolve:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject);

// Camera View Functions - (Miscellaneous)
RCT_EXTERN_METHOD(takePhoto:(nonnull NSNumber *)node options:(NSDictionary *)options resolve:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject);
RCT_EXTERN_METHOD(flipCamera:(nonnull NSNumber *)node resolve:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject);
RCT_EXTERN_METHOD(focus:(nonnull NSNumber *)node x:(nonnull NSNumber *)x y:(nonnull NSNumber *)y resolve:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject);
RCT_EXTERN_METHOD(zoom:(nonnull NSNumber *)node factor:(nonnull NSNumber *)factor resolve:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject);
RCT_EXTERN_METHOD(clearLenses:(nonnull NSNumber *)node onClearLensCallback:(RCTResponseSenderBlock)onClearLensCallback);
RCT_EXTERN_METHOD(adjustLensesVolume:(nonnull NSNumber *)node mute:(BOOL)mute onAdjustLensesVolumeCallback:(RCTResponseSenderBlock)onAdjustLensesVolumeCallback);
RCT_EXTERN_METHOD(getLensesByGroupId:(nonnull NSNumber *)node lensGroups:(NSArray *)lensGroups onGetLensesByGroupIdCallback:(RCTResponseSenderBlock)onGetLensesByGroupIdCallback);
RCT_EXTERN_METHOD(changeLensById:(nonnull NSNumber *)node lensId:(NSString *)lensId lensGroups:(NSArray *)lensGroups launchDataMap:(NSDictionary *)launchDataMap resolve:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject);
RCT_EXTERN_METHOD(checkBlurSupporting:(nonnull NSNumber *)node onCheckBlurSupportingCallback:(RCTResponseSenderBlock)onCheckBlurSupportingCallback);
RCT_EXTERN_METHOD(checkToneModeSupporting:(nonnull NSNumber *)node onCheckToneModeSupportingCallback:(RCTResponseSenderBlock)onCheckToneModeSupportingCallback);
RCT_EXTERN_METHOD(adjustBlur:(nonnull NSNumber *)node amount:(nonnull NSNumber *)amount);
RCT_EXTERN_METHOD(adjustTone:(nonnull NSNumber *)node amount:(nonnull NSNumber *)amount);

// Miscellaneous Functions
_RCT_EXTERN_REMAP_METHOD(init, initMethod:(NSDictionary *)options, false);
RCT_EXTERN_METHOD(getMetadata:(RCTResponseSenderBlock)onGetMetadataCallback);

@end
