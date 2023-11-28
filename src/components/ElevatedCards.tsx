import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.headingText}>ElevatedCards</Text>
      <Text style={styles.belowHeading}>
        hehe, bas scroll view ka dekhna tha jo ki upar hi complete hogya{' '}
        <Text style={styles.red}>wuhuuuuu</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
  belowHeading: {
    fontSize: 14,
    fontWeight: 'bold',
    padding: 10,
  },
  red: {
    color: 'red',
  },
});
