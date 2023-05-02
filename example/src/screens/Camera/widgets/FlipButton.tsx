import React from 'react';
import { TouchableOpacity, Image, StyleSheet, ViewStyle } from 'react-native';

import { Images } from '../../../constants';

interface FlipButtonProps {
  onPress: () => void;
  style?: ViewStyle;
}

const FlipButton = ({ style, onPress }: FlipButtonProps) => {
  return (
    <TouchableOpacity style={style} onPress={onPress}>
      <Image source={Images.FLIP} style={styles.icon} />
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

export default FlipButton;
