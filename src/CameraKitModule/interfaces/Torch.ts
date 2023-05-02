import type { ColorValue } from 'react-native';

export interface TorchOptions {
  /**
   * Torch settings for back camera.
   */
  back?: {
    /**
     * Enable/disable back torch.
     */
    enabled: boolean;
  };

  /**
   * Ring light effect settings for front camera.
   */
  ring?: {
    /**
     * Enable/disable ring light effect.
     */
    enabled: boolean;

    /**
     * Color of the ring light effect to the specified color.
     *
     * @default white
     */
    color?: ColorValue;

    /**
     * Start animation of ring light effect.
     *
     * @default false
     */
    animated?: boolean;

    /**
     * Intensity of the ring light effect.
     * Can be set between 0.0 and 1.0
     *
     * @default 0.25
     */
    intensity?: number;
  };
}
