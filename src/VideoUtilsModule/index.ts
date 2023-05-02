import { NativeModules, Platform } from 'react-native';

const { VideoUtilsModule } = NativeModules;

const LINKING_ERROR =
  `The package 'react-native-snapchat-camera-kit' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

if (VideoUtilsModule == null) {
  console.error(LINKING_ERROR);
}

export interface VideoMetadata {
  /**
   * The path of the file.
   */
  path: string;

  /**
   * File size in bytes.
   */
  size: number;

  /**
   * The average framerate (in frames/sec).
   */
  frameRate: number;

  /**
   * Duration of the video in seconds.
   */
  duration: number;

  /**
   * Audio codec.
   *
   * @platform Android
   */
  audioCodec: string;

  /**
   * Video codec.
   *
   * @platform Android
   */
  videoCodec: string;

  /**
   * Video width.
   */
  width: number;

  /**
   * Video height.
   */
  height: number;
}

export default {
  getMetadata: (path: String): Promise<VideoMetadata> => {
    return VideoUtilsModule.getMetadata(path);
  },
};
