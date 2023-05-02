import React, { useRef, useEffect, useState, useCallback } from 'react';
import { StyleSheet, Linking, View, Alert } from 'react-native';

import CameraKit, {
  init,
  getMetadata,
  CameraPermissionManager,
} from 'react-native-snapchat-camera-kit';

import {
  FlipButton,
  RecordButton,
  FlashButton,
  ActionButtons,
  AdjustmentsModal,
  ControlModal,
} from './widgets';
import { Pages, Enums, Config } from '../../constants';
import Utils from '../../utils';

import type { CameraScreenProps } from '../../navigation/types';

const CameraScreen = ({ navigation, route }: CameraScreenProps) => {
  const ref = useRef<CameraKit>(null);

  const [initialized, setInitialized] = useState(false);
  const [zoom, setZoom] = useState(false);
  const [focus, setFocus] = useState(false);
  const [mute, setMute] = useState(false);

  const [flashOn, setFlashOn] = useState(false);
  const [active, setActive] = useState(true);
  const [mode, setMode] = useState<'video' | 'photo'>('video');
  const [isVideoRecording, setIsVideoRecording] = useState(false);
  const [isVideoPaused, setIsVideoPaused] = useState(false);

  const [permsGranted, setPermsGranted] = useState(false);

  const [adjustmentModal, setAdjustmentModal] = useState(false);
  const [blurAmount, setBlurAmount] = useState(0);
  const [toneAmount, setToneAmount] = useState(0);

  const [controlModal, setControlModal] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(0);

  const warnAboutPermissions = useCallback((tryAgainPress: () => void) => {
    Alert.alert(
      'Permissons not granted',
      'Give camera and microphone permissions over app settings page!',
      [
        {
          text: 'Go to Settings',
          onPress: () => {
            warnAboutPermissions(tryAgainPress);
            Linking.openSettings();
          },
        },
        {
          text: 'Try Again',
          onPress: () => {
            tryAgainPress();
          },
        },
      ]
    );
  }, []);

  useEffect(() => {
    init({
      apiKey: Config.CAMERA_KIT.API_KEY,
      applicationId: Config.CAMERA_KIT.APP_ID,
    });

    setInitialized(true);
  }, []);

  useEffect(() => {
    const requestPermissions = async () => {
      const cameraPermission =
        await CameraPermissionManager.requestCameraPermission();
      const microphonePermission =
        await CameraPermissionManager.requestMicrophonePermission();

      const isCameraAllowed = cameraPermission === 'authorized';
      const isMicrophoneAllowed = microphonePermission === 'authorized';

      if (isCameraAllowed && isMicrophoneAllowed) {
        setPermsGranted(true);
      } else {
        warnAboutPermissions(requestPermissions);
      }
    };

    requestPermissions();
  }, [warnAboutPermissions]);

  if (!permsGranted) {
    return null;
  }

  if (!initialized) {
    return null;
  }

  return (
    <>
      <CameraKit
        ref={ref}
        style={styles.container}
        isActive={active}
        initialCameraFacing="front"
        initialLens={{
          id: route?.params?.lensId,
        }}
        zoom={zoom}
        focus={focus}
        preset="hd-1280x720"
        lensGroups={Config.CAMERA_KIT.LENS_GROUP_ID}
        onInitialized={() => {
          console.log('onInitialized');
        }}
        onLensChanged={(_event) => {
          // console.log(event);
        }}
        onPhotoTaken={(picture) => {
          console.log({ picture });
          navigation.navigate(Pages.PREVIEW, {
            type: Enums.PREVIEW_TYPES.PHOTO,
            path: picture.path,
          });
        }}
        onVideoRecordingFinished={(video) => {
          console.log({ video });
          setIsVideoRecording(false);
          navigation.navigate(Pages.PREVIEW, {
            type: Enums.PREVIEW_TYPES.VIDEO,
            path: video.path,
          });
        }}
        onError={(error) => {
          console.log('onError', error);
        }}
      />
      <ActionButtons
        style={styles.ActionButtons}
        buttons={[
          {
            label: 'Switch Video Mode',
            onPress: () => setMode('video'),
            hide: mode === 'video',
          },
          {
            label: 'Switch Photo Mode',
            onPress: () => setMode('photo'),
            hide: mode === 'photo',
          },
          {
            label: isVideoPaused ? 'Resume Video' : 'Pause Video',
            onPress: () => {
              if (isVideoPaused) {
                ref.current?.resumeRecording().then(() => {
                  setIsVideoPaused(false);
                });
              } else {
                ref.current?.pauseRecording().then(() => {
                  setIsVideoPaused(true);
                });
              }
            },
            disabled: !isVideoRecording,
            hide: mode === 'photo',
          },
          {
            label: active ? 'Deactive' : 'Active',
            onPress: () => setActive(!active),
          },
          {
            label: zoom ? 'Deactivate Zoom' : 'Activate Zoom',
            onPress: () => setZoom(!zoom),
          },
          {
            label: focus ? 'Deactivate Focus' : 'Activate Focus',
            onPress: () => setFocus(!focus),
          },
          {
            label: 'Adjustments',
            onPress: () => setAdjustmentModal(true),
          },
          {
            label: 'Controls',
            onPress: () => setControlModal(true),
          },
          {
            label: 'Get Lenses',
            onPress: () => {
              ref.current?.getLenses().then((lenses) => {
                navigation.reset({
                  index: 0,
                  routes: [{ name: Pages.LENSES, params: { lenses } }],
                });
              });
            },
          },
          {
            label: 'Change Lens by Id',
            onPress: () => {
              ref.current
                ?.changeLensById(Config.CAMERA_KIT.LENS_ID)
                .then((status) => {
                  console.log(`Lens Changes Status: ${status}`);
                });
            },
          },
          {
            label: 'Clear Lenses',
            onPress: () => {
              ref.current?.clearLenses().then((status) => {
                console.log('Clear Lenses Status: ', status);
              });
            },
          },
          {
            label: mute ? 'Set Lens Volume Unmute' : 'Set Lens Volume Mute',
            onPress: () => {
              ref.current?.adjustLensesVolume(!mute).then((status) => {
                console.log('Lens Volume Status: ', status);
                setMute(!mute);
              });
            },
          },
          {
            label: 'Get Metadata',
            onPress: () => {
              getMetadata().then((metadata) => {
                console.log({ metadata });
              });
            },
          },
          {
            label: 'Go Back',
            onPress: () => {
              navigation.reset({
                index: 0,
                routes: [
                  {
                    name: Pages.HOME,
                  },
                ],
              });
            },
          },
        ]}
      />
      <FlipButton
        style={styles.flipButton}
        onPress={() => {
          ref.current?.flipCamera().then((facing) => {
            console.log({ facing });
          });
        }}
      />
      <FlashButton
        style={styles.flashButton}
        isOn={flashOn}
        onPress={() => {
          setFlashOn(!flashOn);
        }}
      />
      <View style={styles.bottomButtonContainer}>
        <RecordButton
          mode={mode}
          isRecording={isVideoRecording}
          onPress={() => {
            if (mode === 'photo') {
              ref.current?.takePhoto();
            }

            if (mode === 'video') {
              if (isVideoRecording) {
                ref.current?.stopRecording().finally(() => {
                  setIsVideoRecording(false);
                });
              } else {
                ref.current
                  ?.startRecording({
                    resolution: '720p',
                  })
                  .then(() => {
                    setIsVideoRecording(true);
                  })
                  .catch((error) => {
                    console.log({ error });
                    setIsVideoRecording(false);
                  });
              }
            }
          }}
        />
      </View>
      <ControlModal
        visible={controlModal}
        onDismiss={() => setControlModal(false)}
        zoomLevel={zoomLevel}
        setZoomLevel={(value) => {
          const amount = Utils.naiveRound(value, 1);
          ref.current?.zoom(amount);
          setZoomLevel(amount);
        }}
      />
      <AdjustmentsModal
        visible={adjustmentModal}
        onDismiss={() => setAdjustmentModal(false)}
        onCheckToneModeSupportingPress={() => {
          ref.current?.checkToneModeSupporting().then((status) => {
            Alert.alert('Tone Mode Supporting?', status.toString());
          });
        }}
        onCheckBlurSupportingPress={() => {
          ref.current?.checkBlurSupporting().then((status) => {
            Alert.alert('Blur Supporting?', status.toString());
          });
        }}
        toneAmount={toneAmount}
        blurAmount={blurAmount}
        setToneAmount={(value) => {
          const amount = Utils.naiveRound(value, 1);
          ref.current?.adjustTone(amount);
          setToneAmount(amount);
        }}
        setBlurAmount={(value) => {
          const amount = Utils.naiveRound(value, 1);
          ref.current?.adjustBlur(amount);
          setBlurAmount(amount);
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flipButton: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  flashButton: {
    position: 'absolute',
    top: 100,
    right: 20,
  },
  bottomButtonContainer: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    bottom: 60,
    height: 50,
  },
  ActionButtons: {
    position: 'absolute',
    alignItems: 'flex-start',
    left: 20,
    top: 40,
  },
});

export default CameraScreen;
