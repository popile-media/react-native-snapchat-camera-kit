import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';

import { Button } from '../../../components';
import type { ButtonProps } from '../../../components/Button';

interface ButtonInstanceProps extends ButtonProps {
  hide?: boolean;
}

interface ActionButtonsProps {
  buttons: ButtonInstanceProps[];
  style?: ViewStyle;
}

const ActionButtons = ({ style, buttons }: ActionButtonsProps) => {
  return (
    <View style={style}>
      {buttons.map((props, index) => {
        if (props.hide) {
          return null;
        }

        return (
          <Button
            key={`button-${index}-${props.label}`}
            type="filled"
            style={styles.button}
            textStyle={styles.buttonText}
            {...props}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    marginBottom: 10,
    padding: 5,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: '400',
  },
});

export default ActionButtons;
