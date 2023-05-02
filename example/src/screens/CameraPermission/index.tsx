import React from 'react';
import { View, Alert, StyleSheet } from 'react-native';

import { CameraPermissionManager } from 'react-native-snapchat-camera-kit';

import { Button } from '../../components';

import type { CameraPermissionScreenProps } from '../../navigation/types';

const CameraPermissionScreen = ({
  navigation,
}: CameraPermissionScreenProps) => {
  return (
    <View style={styles.container}>
      <Button
        style={styles.button}
        label="Check Camera Permission"
        onPress={async () => {
          const cameraPermission =
            await CameraPermissionManager.getCameraPermissionStatus();

          Alert.alert('Status', cameraPermission);
        }}
      />
      <Button
        style={styles.button}
        label="Check Microphone Permission"
        onPress={async () => {
          const microphonePermission =
            await CameraPermissionManager.getMicrophonePermissionStatus();

          Alert.alert('Status', microphonePermission);
        }}
      />
      <Button
        style={styles.button}
        label="Request Camera Permission"
        onPress={async () => {
          const cameraPermission =
            await CameraPermissionManager.requestCameraPermission();

          Alert.alert('Status', cameraPermission);
        }}
      />
      <Button
        style={styles.button}
        label="Request Microphone Permission"
        onPress={async () => {
          const microphonePermission =
            await CameraPermissionManager.requestMicrophonePermission();

          Alert.alert('Status', microphonePermission);
        }}
      />
      <Button
        style={styles.button}
        label="Go Back"
        onPress={navigation.goBack}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginBottom: 40,
  },
});

export default CameraPermissionScreen;
