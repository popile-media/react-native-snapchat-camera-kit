import type { ErrorWithCause } from '../CameraError';

import type { Lens } from './Lens';

/**
 * OnErrorEvent
 */

export interface OnErrorEvent {
  code: string;
  message: string;
  cause?: ErrorWithCause;
}

/**
 * OnLensChangedEvent
 */

interface OnLensIdleEvent {
  status: 'idle';
  lens: null;
}

interface OnLensAppliedEvent {
  status: 'applied';
  lens: Lens;
}

interface OnLensFirstFrameProcessedEvent {
  status: 'first-frame-processed';
  lens: Lens;
}

export type OnLensChangedEvent =
  | OnLensIdleEvent
  | OnLensAppliedEvent
  | OnLensFirstFrameProcessedEvent;
