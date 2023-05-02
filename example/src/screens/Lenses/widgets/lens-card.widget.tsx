import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

import type { Lens } from 'react-native-snapchat-camera-kit';

interface LensCardProps {
  lens: Lens;
  onPress: () => void;
}

const LensCard = ({ lens, onPress }: LensCardProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={{ uri: lens?.icons?.[0]?.uri }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{lens.name}</Text>
        <Text style={styles.description}>{lens.id}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  content: {
    marginLeft: 10,
  },
  title: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    color: 'gray',
  },
  image: {
    height: 60,
    width: 60,
  },
});

export default LensCard;
