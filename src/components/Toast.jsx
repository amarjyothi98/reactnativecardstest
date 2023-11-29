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
  const [timeoutDuration, setTimeoutDuration] = useState(3000);

  const onNewToast = data => {
    if (data.duration) {
      setTimeoutDuration(data.duration);
    }

    setMessage(data.message);
    setMessageType(data.type);
  };

  const closeToast = () => {
    setMessage(null);
    setTimeoutDuration(3000);
  };

  useEffect(() => {
    if (message) {
      if (timeoutDuration === 0) {
        closeToast();
      } else {
        setTimeout(() => {
          setTimeoutDuration(prev => prev - 1000);
        }, 1000);
      }
    }
  }, [message, timeoutDuration]);

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
    top: '5%',
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
