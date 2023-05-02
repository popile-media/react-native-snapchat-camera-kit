import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Button } from '../../../components';
import SliderView from './SliderView';
import ModalBase from './ModalBase';

interface AdjustmentsModalProps {
  visible?: boolean;
  onDismiss: () => void;
  onCheckToneModeSupportingPress: () => void;
  onCheckBlurSupportingPress: () => void;
  toneAmount: number;
  blurAmount: number;
  setToneAmount: (value: number) => void;
  setBlurAmount: (value: number) => void;
}

const AdjustmentsModal = ({
  visible,
  onDismiss,
  onCheckToneModeSupportingPress,
  onCheckBlurSupportingPress,
  toneAmount,
  blurAmount,
  setToneAmount,
  setBlurAmount,
}: AdjustmentsModalProps) => {
  return (
    <ModalBase visible={visible} onDismiss={onDismiss}>
      <SliderView title="Tone" value={toneAmount} onChanged={setToneAmount} />
      <SliderView title="Blur" value={blurAmount} onChanged={setBlurAmount} />
      <Text style={styles.title}>Check Supporting</Text>
      <View style={styles.supportButtonContainer}>
        <Button
          style={styles.supportButton}
          label="Tone"
          onPress={onCheckToneModeSupportingPress}
        />
        <Button
          style={styles.supportButton}
          label="Blur"
          onPress={onCheckBlurSupportingPress}
        />
      </View>
    </ModalBase>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  supportButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 25,
    width: 170,
  },
  supportButton: {
    borderColor: '#000',
    borderWidth: 1,
    width: 75,
    alignItems: 'center',
  },
});

export default AdjustmentsModal;
