import React, {useEffect} from 'react';
import {
  DeviceEventEmitter,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function Toast() {
  const onNewToast = data => {
    console.log('data', data);
  };

  useEffect(() => {
    DeviceEventEmitter.addListener('SHOW TOAST', onNewToast);

    return () => {
      DeviceEventEmitter.removeAllListeners('SHOW TOAST');
    };
  }, []);

  return (
    <View style={styles.toast}>
      <TouchableOpacity>
        <Text style={styles.toastText}>Success Toast</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  toast: {
    position: 'absolute',
    top: '12%',
    left: '4%',
    right: '4%',
    backgroundColor: 'green',
    zIndex: 1,
    elevation: 1,
    borderRadius: 10,
    opacity: 0.9,
  },
  toastText: {
    padding: 14,
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});
