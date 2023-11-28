import {DeviceEventEmitter} from 'react-native';

const toast = {
  info: options => {
    DeviceEventEmitter.emit('SHOW TOAST', {...options, type: 'info'});
  },
  success: options => {
    DeviceEventEmitter.emit('SHOW TOAST', {...options, type: 'success'});
  },
  danger: options => {
    DeviceEventEmitter.emit('SHOW TOAST', {...options, type: 'danger'});
  },
};

export default toast;
