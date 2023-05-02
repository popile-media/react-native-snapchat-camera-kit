import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import { LensCard } from './widgets';
import { Pages } from '../../constants';

import type { LensesScreenProps } from '../../navigation/types';

const LensesScreen = ({ navigation, route }: LensesScreenProps) => {
  const { lenses } = route.params;

  return (
    <FlatList
      data={lenses}
      style={styles.container}
      renderItem={({ item }) => {
        return (
          <LensCard
            lens={item}
            onPress={() => {
              navigation.navigate(Pages.CAMERA, { lensId: item.id });
            }}
          />
        );
      }}
      ListFooterComponent={() => {
        return <View style={styles.footer} />;
      }}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  footer: {
    marginBottom: 30,
  },
});

export default LensesScreen;
