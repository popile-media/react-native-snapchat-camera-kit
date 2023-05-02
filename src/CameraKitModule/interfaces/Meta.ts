interface MetaBase {
  /**
   * Check if the current environment is supported to run CameraKit Session.
   */
  supported: boolean;
}

interface MetaAndroid extends MetaBase {
  /**
   * Is ArCore supported?
   *
   * @platform Android
   */
  arCoreSupported: boolean;
  /**
   * OpenGL ES information.
   *
   * @platform Android
   */
  openGLES?: {
    code: number;
    name: string | null;
  };
}

interface MetaIOS extends MetaBase {}

export type Meta = MetaAndroid | MetaIOS;
