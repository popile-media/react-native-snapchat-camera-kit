package com.snapchatcamerakit.camera.models

import com.facebook.react.bridge.ReadableMap

class DesiredCameraConfig(enableZoom: Boolean, mirrorPortrait: Boolean, photoConfig: PhotoConfig, videoConfig: VideoConfig) {
  val enableZoom: Boolean = enableZoom
  val mirrorPortrait: Boolean = mirrorPortrait
  val photoConfig: PhotoConfig = photoConfig
  val videoConfig: VideoConfig = videoConfig

  companion object {
    private val DEFAULT = DesiredCameraConfig(enableZoom = true, mirrorPortrait = false, PhotoConfig.getDefault(), VideoConfig.getDefault())

    fun getDefault(): DesiredCameraConfig {
      return DEFAULT
    }

    fun fromBridge(readableMap: ReadableMap?): DesiredCameraConfig {
      if (readableMap == null) {
        return DEFAULT
      }

      val enableZoom = readableMap.getBoolean("enableZoom")

      // mirrorPortraitOutputToMatchCameraDisplay
      val mirrorPortrait = readableMap.getBoolean("mirrorPortrait")

      // ??
      // import com.facebook.internal.AnalyticsEvents;
      // AnalyticsEvents.PARAMETER_SHARE_DIALOG_CONTENT_PHOTO (photo)
      val photoConfig = PhotoConfig.fromBridge(readableMap.getMap("photo"))
      val videoConfig = VideoConfig.fromBridge(readableMap.getMap("video"))

      return DesiredCameraConfig(enableZoom, mirrorPortrait, photoConfig, videoConfig)
    }
  }
}
