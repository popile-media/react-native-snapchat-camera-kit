import 'react-native-config';

declare module 'react-native-config' {
  interface NativeConfig {
    CAMERA_KIT_APP_ID: string;
    CAMERA_KIT_API_KEY: string;
    CAMERA_KIT_LENS_ID: string;
    CAMERA_KIT_LENS_GROUP_ID: string;
  }
}
