import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { Slider } from '@miblanchard/react-native-slider';

interface SliderViewProps {
  title: string;
  value: number;
  onChanged: (position: number) => void;
}

const SliderView = ({ title, value, onChanged }: SliderViewProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{`${title}:`}</Text>
        <Text style={styles.value}>{value}</Text>
      </View>
      <Slider
        startFromZero
        thumbStyle={styles.thumb}
        value={value}
        onSlidingComplete={(positions) => {
          if (positions[0]) {
            onChanged(positions[0]);
          }
        }}
        step={0.1}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 180,
    marginBottom: 20,
  },
  thumb: {
    height: 15,
    width: 15,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  value: {
    marginLeft: 10,
    fontSize: 20,
  },
});

export default SliderView;
