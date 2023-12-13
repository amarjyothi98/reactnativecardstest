import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default function ToProfileBusinessButton() {
  const handlePress = () => {};

  return (
    <View>
      <TouchableOpacity style={sytles.button} onPress={handlePress}>
        <Text>Profile Business for Trendings Around</Text>
      </TouchableOpacity>
    </View>
  );
}

const sytles = StyleSheet.create({
  button: {
    textAlign: 'center',
    backgroundColor: '#ACDDDE',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
    padding: 10,
    borderRadius: 10,
  },
});
