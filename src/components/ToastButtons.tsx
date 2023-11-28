import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import toast from '../helpers/toast';

export default function ToastButtons() {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          toast.success({message: 'Success'});
        }}
        style={styles.button}>
        <Text style={styles.buttonText}>Success</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          toast.danger({message: 'Danger'});
        }}
        style={styles.button}>
        <Text style={[styles.buttonText, {backgroundColor: 'red'}]}>
          Danger
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          toast.info({message: 'Warning'});
        }}
        style={styles.button}>
        <Text style={[styles.buttonText, {backgroundColor: 'gold'}]}>
          Warning
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  button: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
  buttonText: {
    backgroundColor: 'green',
    paddingHorizontal: 8,
    paddingVertical: 5,
    color: 'white',
    borderRadius: 6,
  },
});
