export interface InitOptions {
  /**
   * An optional value of the CameraKit API token, default is null which means that
   * the CameraKit will attempt to extract it from the current application manifest metadata.
   */
  apiKey: string;

  /**
   * An optional ID of the CameraKit application, default is null which means that
   * the CameraKit will attempt to extract it from the current application manifest metadata.
   */
  applicationId: string;
}
