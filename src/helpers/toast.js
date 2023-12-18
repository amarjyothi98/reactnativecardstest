import {DeviceEventEmitter} from 'react-native';

const toast = {
  info: options => {
    DeviceEventEmitter.emit('SHOW TOAST', {...options, type: 'primary'});
  },
  success: options => {
    DeviceEventEmitter.emit('SHOW TOAST', {...options, type: 'success'});
    // console.log('object success', options.message);
  },
  danger: options => {
    DeviceEventEmitter.emit('SHOW TOAST', {...options, type: 'danger'});
  },
};

export default toast;
