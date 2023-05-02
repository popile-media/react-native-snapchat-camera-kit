import React from 'react';
import { TouchableOpacity, Image, StyleSheet, ViewStyle } from 'react-native';

import { Images } from '../../../constants';

interface RecordButtonProps {
  mode?: 'video' | 'photo';
  onPress: () => void;
  style?: ViewStyle;
  isRecording?: boolean;
}

const RecordButton = ({
  mode,
  style,
  onPress,
  isRecording,
}: RecordButtonProps) => {
  const renderButton = () => {
    if (mode === 'photo') {
      return <Image source={Images.DECLASERS} style={styles.icon} />;
    }

    if (isRecording) {
      return <Image source={Images.STOP} style={styles.icon} />;
    }

    return <Image source={Images.RECORD} style={styles.icon} />;
  };
  return (
    <TouchableOpacity style={style} onPress={onPress}>
      {renderButton()}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 60,
    height: 60,
    tintColor: '#fff',
  },
});

export default RecordButton;
