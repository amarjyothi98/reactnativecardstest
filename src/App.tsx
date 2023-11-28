import {SafeAreaView, ScrollView} from 'react-native';

import React from 'react';

import FlatCards from './components/FlatCards';
import ElevatedCards from './components/ElevatedCards';
import FancyCards from './components/FancyCards';
import ActionCard from './components/ActionCard';
import ContactList from './components/ContactList';
import Toast from './components/Toast';
import ToastButtons from './components/ToastButtons';

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
      </ScrollView>
    </SafeAreaView>
  );
}
