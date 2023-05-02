import type { CameraPosition } from './CameraPosition';

type LaunchDataValues = string | number | number[] | string[];
type LaunchData = { [key in string]: LaunchDataValues };

export interface InitialLensOptions {
  id?: string;
  launchData?: LaunchData;
}

export interface ChangeLensByIdOptions {
  lensGroup?: string;
  launchData?: LaunchData;
}

type ImageType = 'Webp' | 'Png';

type Image = {
  uri: string;
  type: ImageType;
};

export interface Lens {
  id: string;
  groupId: string;
  name: string;
  facingPreference: CameraPosition;
  icons: Image[];
  previews: Image[];
  vendorData: {
    [key: string]: string;
  };
}
