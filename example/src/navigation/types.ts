import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import type { Lens } from 'react-native-snapchat-camera-kit';

import { Enums, Pages } from '../constants';

export type RootStackParamList = {
  [Pages.HOME]: undefined;
  [Pages.CAMERA]?: {
    lensId?: string;
  };
  [Pages.CAMERA_PERMISSION]: undefined;
  [Pages.PREVIEW]: {
    path: string;
    type: Enums.PREVIEW_TYPES;
  };
  [Pages.LENSES]: {
    lenses: Lens[];
  };
};

export type HomeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  Pages.HOME
>;

export type CameraScreenProps = NativeStackScreenProps<
  RootStackParamList,
  Pages.CAMERA
>;

export type CameraPermissionScreenProps = NativeStackScreenProps<
  RootStackParamList,
  Pages.CAMERA_PERMISSION
>;

export type PreviewScreenProps = NativeStackScreenProps<
  RootStackParamList,
  Pages.PREVIEW
>;

export type LensesScreenProps = NativeStackScreenProps<
  RootStackParamList,
  Pages.LENSES
>;
