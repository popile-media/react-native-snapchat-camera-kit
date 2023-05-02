import React from 'react';
import { TouchableOpacity, Image, StyleSheet, ViewStyle } from 'react-native';

import { Images } from '../../../constants';

interface FlashButtonProps {
  onPress: () => void;
  style?: ViewStyle;
  isOn?: boolean;
}

const FlashButton = ({ style, onPress, isOn }: FlashButtonProps) => {
  return (
    <TouchableOpacity style={style} onPress={onPress}>
      {isOn ? (
        <Image source={Images.FLASH} style={styles.icon} />
      ) : (
        <Image source={Images.FLASH_OFF} style={styles.icon} />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 50,
    height: 40,
    tintColor: '#fff',
  },
});

export default FlashButton;
