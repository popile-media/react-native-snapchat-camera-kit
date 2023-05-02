import * as React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Pages } from '../constants';

import Screens from '../screens';

import { BackButton } from './widgets';

import type { RootStackParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={Pages.HOME} component={Screens.Home} />
      <Stack.Screen name={Pages.CAMERA} component={Screens.Camera} />
      <Stack.Screen name={Pages.PREVIEW} component={Screens.Preview} />
      <Stack.Screen
        name={Pages.CAMERA_PERMISSION}
        component={Screens.CameraPermission}
      />
      <Stack.Screen
        name={Pages.LENSES}
        component={Screens.Lenses}
        options={({ navigation }) => ({
          title: 'Lenses',
          headerShown: true,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerBackVisible: true,
          headerLeft: () => (
            <BackButton onPress={() => navigation.navigate(Pages.CAMERA)} />
          ),
        })}
      />
    </Stack.Navigator>
  );
};
