import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import toast from '../helpers/toast';

export default function ToastButtons() {
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          toast.success({message: 'hello'});
        }}>
        <Text>Success</Text>
      </TouchableOpacity>
    </View>
  );
}
