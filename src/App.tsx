import {Platform, SafeAreaView, ScrollView, StatusBar} from 'react-native';

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from './screens/Home';

import FlatCards from './components/FlatCards';
import ElevatedCards from './components/ElevatedCards';
import FancyCards from './components/FancyCards';
import ActionCard from './components/ActionCard';
import ContactList from './components/ContactList';
import Toast from './components/Toast';
import ToastButtons from './components/ToastButtons';
import ToProfileBusinessButton from './components/ToProfileBusinessButton';
import BusinessAroundProfile from './components/BusinessAroundProfile';

export type RootStackParamList = {
  Home: undefined;
  Details: {productId: String};
};

const stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <SafeAreaView>
      <Toast />
      <ScrollView>
        <FlatCards />
        <ElevatedCards />
        <FancyCards />
        <ActionCard />
        <ContactList />
        <ToastButtons />
        <ToProfileBusinessButton />
        <BusinessAroundProfile />
      </ScrollView>
      <StatusBar
        backgroundColor="#8B4513"
        barStyle={Platform.OS === 'ios' ? 'dark-content' : 'light-content'}
      />
    </SafeAreaView>
  );
}
