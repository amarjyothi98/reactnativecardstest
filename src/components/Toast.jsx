import React, {useEffect, useState} from 'react';
import {
  DeviceEventEmitter,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const colors = {
  info: '#ffcc00',
  success: '#28a745',
  danger: '#dc3545',
};

export default function Toast() {
  const [messageType, setMessageType] = useState(null);
  const [message, setMessage] = useState('');

  const onNewToast = data => {
    setMessage(data.message);
    setMessageType(data.type);
  };

  useEffect(() => {
    DeviceEventEmitter.addListener('SHOW TOAST', onNewToast);

    return () => {
      DeviceEventEmitter.removeAllListeners('SHOW TOAST');
    };
  }, []);

  if (!message) {
    return null;
  } else {
    return (
      <View style={[styles.toast, {backgroundColor: colors[messageType]}]}>
        <TouchableOpacity>
          <Text style={styles.toastText}>{message}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  toast: {
    position: 'absolute',
    top: '12%',
    left: '4%',
    right: '4%',
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
