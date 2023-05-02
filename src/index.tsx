import CameraKit, { init, getMetadata } from './CameraKitModule';
import CameraPermissionManager from './CameraPermissionsModule';
import VideoUtils from './VideoUtilsModule';

import type { Lens } from './CameraKitModule/interfaces';
import type { CameraPreset } from './CameraKitModule';
import type { VideoMetadata } from './VideoUtilsModule';
import type {
  CameraPermissionRequestStatus,
  CameraPermissionStatus,
} from './CameraPermissionsModule';
export * from './CameraKitModule/CameraError';

export { init, getMetadata, CameraPermissionManager, VideoUtils };

export type {
  Lens,
  VideoMetadata,
  CameraPermissionRequestStatus,
  CameraPermissionStatus,
  CameraPreset,
};

export default CameraKit;
