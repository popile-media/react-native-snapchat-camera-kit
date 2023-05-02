import React from 'react';

import SliderView from './SliderView';
import ModalBase from './ModalBase';

interface ControlModalProps {
  visible?: boolean;
  onDismiss: () => void;
  zoomLevel: number;
  setZoomLevel: (value: number) => void;
}

const ControlModal = ({
  visible,
  onDismiss,
  zoomLevel,
  setZoomLevel,
}: ControlModalProps) => {
  return (
    <ModalBase visible={visible} onDismiss={onDismiss}>
      <SliderView title="Zoom" value={zoomLevel} onChanged={setZoomLevel} />
    </ModalBase>
  );
};

export default ControlModal;
