import { NativeModules, Platform } from 'react-native';

const { CameraPermissionManagerModule } = NativeModules;

const LINKING_ERROR =
  `The package 'react-native-snapchat-camera-kit' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

if (CameraPermissionManagerModule == null) {
  console.error(LINKING_ERROR);
}

export type CameraPermissionRequestStatus = 'authorized' | 'denied';

export type CameraPermissionStatus =
  | 'authorized'
  | 'not-determined'
  | 'denied'
  | 'restricted';

export default {
  requestCameraPermission: (): Promise<CameraPermissionRequestStatus> => {
    return CameraPermissionManagerModule.requestCameraPermission();
  },
  requestMicrophonePermission: (): Promise<CameraPermissionRequestStatus> => {
    return CameraPermissionManagerModule.requestMicrophonePermission();
  },
  getCameraPermissionStatus: (): Promise<CameraPermissionStatus> => {
    return CameraPermissionManagerModule.getCameraPermissionStatus();
  },
  getMicrophonePermissionStatus: (): Promise<CameraPermissionStatus> => {
    return CameraPermissionManagerModule.getMicrophonePermissionStatus();
  },
};
