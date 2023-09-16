package com.snapchatcamerakit.videoutils

import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.WritableMap
import com.facebook.react.module.annotations.ReactModule
import wseemann.media.FFmpegMediaMetadataRetriever

@ReactModule(name = VideoUtilsModule.NAME)
class VideoUtilsModule(context: ReactApplicationContext) : ReactContextBaseJavaModule(context) {
  companion object {
    const val NAME = "VideoUtilsModule"
  }

  override fun getName(): String = NAME

  @ReactMethod
  fun getMetadata(
    path: String,
    promise: Promise,
  ) {
    val map: WritableMap = Arguments.createMap()

    val mmr = FFmpegMediaMetadataRetriever()

    mmr.setDataSource(path)

    val frameRate = mmr.extractMetadata(FFmpegMediaMetadataRetriever.METADATA_KEY_FRAMERATE).toDouble()
    val duration = mmr.extractMetadata(FFmpegMediaMetadataRetriever.METADATA_KEY_DURATION).toInt()
    val fileSize = mmr.extractMetadata(FFmpegMediaMetadataRetriever.METADATA_KEY_FILESIZE).toInt()
    val videoCodec = mmr.extractMetadata(FFmpegMediaMetadataRetriever.METADATA_KEY_VIDEO_CODEC)
    val audioCodec = mmr.extractMetadata(FFmpegMediaMetadataRetriever.METADATA_KEY_AUDIO_CODEC)
    val width = mmr.extractMetadata(FFmpegMediaMetadataRetriever.METADATA_KEY_VIDEO_WIDTH).toInt()
    val height = mmr.extractMetadata(FFmpegMediaMetadataRetriever.METADATA_KEY_VIDEO_HEIGHT).toInt()

    map.putString("path", path)
    map.putString("videoCodec", videoCodec)
    map.putString("audioCodec", audioCodec)
    map.putInt("size", fileSize)
    map.putInt("width", width)
    map.putInt("height", height)
    map.putDouble("frameRate", frameRate)
    map.putInt("duration", duration / 1000)

    promise.resolve(map)
  }
}
