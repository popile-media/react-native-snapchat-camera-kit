import type { TemporaryFile } from './TemporaryFile';

export interface TakePhotoOptions {
  flash?: 'on' | 'off' | 'auto';
}

export interface PhotoFile extends TemporaryFile {}
