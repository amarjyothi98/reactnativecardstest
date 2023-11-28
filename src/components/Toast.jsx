import React, {useEffect} from 'react';
import {DeviceEventEmitter, Text, View} from 'react-native';

export default function Toast() {
  const onNewToast = data => {
    console.log('data', data);
  };

  useEffect(() => {
    DeviceEventEmitter.addListener('message from toast component', onNewToast);

    return () => {
      DeviceEventEmitter.removeAllListeners();
    };
  }, []);

  return (
    <View>
      <Text>Hello form toast</Text>
    </View>
  );
}
