import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Pages } from '../../constants';
import { Button } from '../../components';

import type { HomeScreenProps } from '../../navigation/types';

const HomeScreen = ({ navigation }: HomeScreenProps) => {
  return (
    <View style={styles.container}>
      <Button
        style={styles.button}
        label="Go to Camera View Screen"
        onPress={() => navigation.navigate(Pages.CAMERA)}
      />
      <Button
        style={styles.button}
        label="Go to Camera Permission Screen"
        onPress={() => navigation.navigate(Pages.CAMERA_PERMISSION)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    margin: 20,
  },
});

export default HomeScreen;
