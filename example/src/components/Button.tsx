import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  ViewStyle,
  TextStyle,
} from 'react-native';

export interface ButtonProps {
  type?: 'primary' | 'filled';
  onPress: () => void;
  label: string;
  style?: ViewStyle;
  textStyle?: TextStyle;
  disabled?: boolean;
}

const Button = ({
  type,
  onPress,
  label,
  style,
  textStyle,
  disabled,
}: ButtonProps) => {
  const backgroundColor = type === 'filled' ? '#fff' : undefined;

  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor }, style]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={[styles.text, textStyle]}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
  text: {
    fontWeight: 'bold',
    color: '#000',
  },
});

export default Button;
