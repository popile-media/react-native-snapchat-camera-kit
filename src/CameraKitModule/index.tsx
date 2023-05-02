import React from 'react';
import {
  requireNativeComponent,
  NativeSyntheticEvent,
  findNodeHandle,
  NativeMethods,
  NativeModules,
  Platform,
} from 'react-native';
import type { ViewProps } from 'react-native/types';

import type {
  TakePhotoOptions,
  RecordVideoOptions,
  ChangeLensByIdOptions,
  InitialLensOptions,
  VideoFile,
  InitOptions,
  PhotoFile,
  CameraPosition,
  Lens,
  Point,
  OnErrorEvent,
  OnLensChangedEvent,
  Meta,
  TorchOptions,
} from './interfaces';

import VideoUtils, { VideoMetadata } from '../VideoUtilsModule';

const LINKING_ERROR =
  `The package 'react-native-snapchat-camera-kit' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

const NATIVE_VIEW_KEY = 'CameraKitView';
const NativeCameraView =
  requireNativeComponent<NativeCameraKitProps>(NATIVE_VIEW_KEY);

const { CameraKitView: CameraKitViewMethods } = NativeModules;

if (CameraKitViewMethods == null) {
  console.error(LINKING_ERROR);
}

import {
  CameraRuntimeError,
  isErrorWithCause,
  tryParseNativeCameraError,
} from './CameraError';

/**
 * Indicates the quality level or bit rate of the output.
 *
 * * `"cif-352x288"`: Specifies capture settings suitable for CIF quality (352 x 288 pixel) video output
 * * `"hd-1280x720"`: Specifies capture settings suitable for 720p quality (1280 x 720 pixel) video output.
 * * `"hd-1920x1080"`: Capture settings suitable for 1080p-quality (1920 x 1080 pixels) video output.
 * * `"hd-3840x2160"`: Capture settings suitable for 2160p-quality (3840 x 2160 pixels, "4k") video output.
 * * `"high"`: Specifies capture settings suitable for high-quality video and audio output.
 * * `"iframe-1280x720"`: Specifies capture settings to achieve 1280 x 720 quality iFrame H.264 video at about 40 Mbits/sec with AAC audio.
 * * `"iframe-960x540"`: Specifies capture settings to achieve 960 x 540 quality iFrame H.264 video at about 30 Mbits/sec with AAC audio.
 * * `"input-priority"`: Specifies that the capture session does not control audio and video output settings.
 * * `"low"`: Specifies capture settings suitable for output video and audio bit rates suitable for sharing over 3G.
 * * `"medium"`: Specifies capture settings suitable for output video and audio bit rates suitable for sharing over WiFi.
 * * `"photo"`: Specifies capture settings suitable for high-resolution photo quality output.
 * * `"vga-640x480"`: Specifies capture settings suitable for VGA quality (640 x 480 pixel) video output.
 */
export type CameraPreset =
  | 'cif-352x288'
  | 'hd-1280x720'
  | 'hd-1920x1080'
  | 'hd-3840x2160'
  | 'high'
  | 'iframe-1280x720'
  | 'iframe-960x540'
  | 'input-priority'
  | 'low'
  | 'medium'
  | 'photo'
  | 'vga-640x480';

interface NativeCameraKitProps {
  lensGroups?: string[];
  initialLens?: InitialLensOptions;
  isActive?: boolean;
  initialCameraFacing?: CameraPosition;
  zoom?: boolean;
  focus?: boolean;
  torch?: TorchOptions;
  preset?: CameraPreset;
  onInitialized?: (event: NativeSyntheticEvent<void>) => void;
  onLensChanged?: (event: NativeSyntheticEvent<OnLensChangedEvent>) => void;
  onPhotoTaken?: (event: NativeSyntheticEvent<PhotoFile>) => void;
  onVideoRecordingFinished?: (event: NativeSyntheticEvent<VideoFile>) => void;
  onError?: (event: NativeSyntheticEvent<OnErrorEvent>) => void;
}

interface CameraKitProps extends ViewProps {
  lensGroups?: string | string[];
  initialLens?: InitialLensOptions;

  /**
   * Whether the Camera should actively stream video frames, or not.
   */
  isActive?: boolean;
  initialCameraFacing?: CameraPosition;

  /**
   * Enables or disables the native pinch to zoom gesture.
   *
   * @default false
   */
  zoom?: boolean;
  focus?: boolean;
  torch?: TorchOptions;
  preset?: CameraPreset;

  /**
   * Called when the camera was successfully initialized.
   */
  onInitialized?: () => void;
  onLensChanged?: (event: OnLensChangedEvent) => void;
  onPhotoTaken?: (event: PhotoFile) => void;
  onVideoRecordingFinished?: (event: VideoMetadata) => void;

  /**
   * Called when any kind of runtime error occured.
   */
  onError?: (error: CameraRuntimeError) => void;
}

type RefType = React.Component<NativeCameraKitProps> & Readonly<NativeMethods>;

class CameraKit extends React.PureComponent<CameraKitProps> {
  static defaultProps = {
    initialCameraFacing: 'back',
    isActive: true,
    lensGroups: null,
    initialLens: null,
  };

  private readonly ref: React.RefObject<RefType>;

  constructor(props: CameraKitProps) {
    super(props);
    this.ref = React.createRef<RefType>();

    this.onInitialized = this.onInitialized.bind(this);
    this.onLensChanged = this.onLensChanged.bind(this);
    this.onPhotoTaken = this.onPhotoTaken.bind(this);
    this.onVideoRecordingFinished = this.onVideoRecordingFinished.bind(this);
    this.onError = this.onError.bind(this);
  }

  private get handle(): number | null {
    const nodeHandle = findNodeHandle(this.ref.current as any);
    if (nodeHandle == null || nodeHandle === -1) {
      throw new CameraRuntimeError(
        'system/view-not-found',
        "Could not get the Camera's native view tag! Does the Camera View exist in the native view-tree?"
      );
    }

    return nodeHandle;
  }

  private onInitialized(): void {
    if (!this.props?.onInitialized) {
      return;
    }

    this.props.onInitialized();
  }

  private onLensChanged(event: NativeSyntheticEvent<OnLensChangedEvent>): void {
    if (!this.props?.onLensChanged) {
      return;
    }

    this.props.onLensChanged(event.nativeEvent);
  }

  private onPhotoTaken(event: NativeSyntheticEvent<PhotoFile>): void {
    if (!this.props?.onPhotoTaken) {
      return;
    }

    this.props.onPhotoTaken(event.nativeEvent);
  }

  private async onVideoRecordingFinished(
    event: NativeSyntheticEvent<VideoFile>
  ): Promise<void> {
    if (!this.props?.onVideoRecordingFinished) {
      return;
    }

    const metadata = await VideoUtils.getMetadata(event.nativeEvent.path);
    this.props.onVideoRecordingFinished(metadata);
  }

  private onError(event: NativeSyntheticEvent<OnErrorEvent>): void {
    if (!this.props?.onError) {
      return;
    }

    const error = event.nativeEvent;
    const cause = isErrorWithCause(error.cause) ? error.cause : undefined;
    this.props.onError(
      // @ts-expect-error We're casting from unknown bridge types to TS unions, I expect it to hopefully work
      new CameraRuntimeError(error.code, error.message, cause)
    );
  }

  public checkToneModeSupporting(): Promise<boolean> {
    return new Promise((resolve) => {
      CameraKitViewMethods.checkToneModeSupporting(
        this.handle,
        (status: boolean | null, error: any) => {
          if (status !== null) {
            resolve(status);
          }

          if (error !== null) {
            throw tryParseNativeCameraError(error);
          }
        }
      );
    });
  }

  public checkBlurSupporting(): Promise<boolean> {
    return new Promise((resolve) => {
      CameraKitViewMethods.checkBlurSupporting(
        this.handle,
        (status: boolean | null, error: any) => {
          if (status !== null) {
            resolve(status);
          }

          if (error !== null) {
            throw tryParseNativeCameraError(error);
          }
        }
      );
    });
  }

  public adjustBlur(amount: number): void {
    CameraKitViewMethods.adjustBlur(this.handle, amount);
  }

  public adjustTone(amount: number): void {
    CameraKitViewMethods.adjustTone(this.handle, amount);
  }

  public async takePhoto(options?: TakePhotoOptions): Promise<void> {
    try {
      return await CameraKitViewMethods.takePhoto(this.handle, options ?? {});
    } catch (e) {
      throw tryParseNativeCameraError(e);
    }
  }

  public async flipCamera(): Promise<CameraPosition> {
    try {
      return await CameraKitViewMethods.flipCamera(this.handle);
    } catch (e) {
      throw tryParseNativeCameraError(e);
    }
  }

  public async zoom(factor: number): Promise<void> {
    try {
      return await CameraKitViewMethods.zoom(this.handle, factor);
    } catch (e) {
      throw tryParseNativeCameraError(e);
    }
  }

  public async focus(point: Point): Promise<void> {
    try {
      return await CameraKitViewMethods.focus(this.handle, point.x, point.y);
    } catch (e) {
      throw tryParseNativeCameraError(e);
    }
  }

  public async changeLensById(
    lensId: string,
    options?: ChangeLensByIdOptions
  ): Promise<void> {
    const { lensGroups } = this.props;
    const _lensGroups = options?.lensGroup
      ? [options.lensGroup]
      : typeof lensGroups === 'string'
      ? [lensGroups]
      : lensGroups;

    const _launchData = options?.launchData || null;

    try {
      return await CameraKitViewMethods.changeLensById(
        this.handle,
        lensId,
        _lensGroups,
        _launchData
      );
    } catch (e) {
      throw tryParseNativeCameraError(e);
    }
  }

  public getLenses(lensGroup?: string): Promise<Lens[]> {
    const { lensGroups } = this.props;
    const _lensGroups = lensGroup
      ? [lensGroup]
      : typeof lensGroups === 'string'
      ? [lensGroups]
      : lensGroups;

    return new Promise((resolve) => {
      CameraKitViewMethods.getLensesByGroupId(
        this.handle,
        _lensGroups,
        (lenses: Lens[] | null, error: any) => {
          if (lenses !== null) {
            resolve(lenses);
          }

          if (error !== null) {
            throw tryParseNativeCameraError(error);
          }
        }
      );
    });
  }

  public clearLenses(): Promise<boolean> {
    return new Promise((resolve) => {
      CameraKitViewMethods.clearLenses(
        this.handle,
        (status: boolean | null, error: any) => {
          if (status !== null) {
            resolve(status);
          }

          if (error !== null) {
            throw tryParseNativeCameraError(error);
          }
        }
      );
    });
  }

  public adjustLensesVolume(mute: Boolean): Promise<boolean> {
    return new Promise((resolve) => {
      CameraKitViewMethods.adjustLensesVolume(
        this.handle,
        mute,
        (status: boolean | null, error: any) => {
          if (status !== null) {
            resolve(status);
          }

          if (error !== null) {
            throw tryParseNativeCameraError(error);
          }
        }
      );
    });
  }

  public async startRecording(options: RecordVideoOptions): Promise<void> {
    try {
      return await CameraKitViewMethods.startRecording(this.handle, options);
    } catch (e) {
      throw tryParseNativeCameraError(e);
    }
  }

  public async pauseRecording(): Promise<void> {
    try {
      return await CameraKitViewMethods.pauseRecording(this.handle);
    } catch (e) {
      throw tryParseNativeCameraError(e);
    }
  }

  public async resumeRecording(): Promise<void> {
    try {
      return await CameraKitViewMethods.resumeRecording(this.handle);
    } catch (e) {
      throw tryParseNativeCameraError(e);
    }
  }

  public async cancelRecording(): Promise<void> {
    try {
      return await CameraKitViewMethods.cancelRecording(this.handle);
    } catch (e) {
      throw tryParseNativeCameraError(e);
    }
  }

  public async stopRecording(): Promise<void> {
    try {
      return await CameraKitViewMethods.stopRecording(this.handle);
    } catch (e) {
      throw tryParseNativeCameraError(e);
    }
  }

  public render() {
    const {
      isActive,
      initialCameraFacing,
      lensGroups,
      initialLens,
      zoom,
      focus,
      torch,
      preset,
      ...props
    } = this.props;

    return (
      <NativeCameraView
        {...props}
        ref={this.ref as any}
        initialLens={initialLens}
        zoom={zoom}
        focus={focus}
        torch={torch}
        preset={preset}
        lensGroups={typeof lensGroups === 'string' ? [lensGroups] : lensGroups}
        initialCameraFacing={initialCameraFacing}
        isActive={isActive}
        onInitialized={this.onInitialized}
        onLensChanged={this.onLensChanged}
        onPhotoTaken={this.onPhotoTaken}
        onVideoRecordingFinished={this.onVideoRecordingFinished}
        onError={this.onError}
      />
    );
  }
}

export const init = (options: InitOptions) => {
  CameraKitViewMethods.init(options);
};

export const getMetadata = (): Promise<Meta> => {
  return new Promise((resolve) => {
    CameraKitViewMethods.getMetadata((metadata: Meta, _error: null) => {
      resolve(metadata);
    });
  });
};

export default CameraKit;
