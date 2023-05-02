import type { TemporaryFile } from './TemporaryFile';

type Resolution = '480p' | '720p' | '1080p' | '2160p';

interface RecordVideoOptionsAndroid {
  /**
   * Specify the frames per second this camera should use.
   *
   * @default 30
   */
  fps?: number;

  /**
   * Specify the video height and width.
   *
   * @default 720p
   */
  resolution?: Resolution;
}

interface RecordVideoOptionsIOS {}

export type RecordVideoOptions =
  | RecordVideoOptionsAndroid
  | RecordVideoOptionsIOS;

export interface VideoFile extends TemporaryFile {}
