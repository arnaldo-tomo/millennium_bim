import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigation } from './router/stack';
import { TabsNavigation } from './router/tabs';

export default function App() {
  return (
    // <StackNavigation />
    <TabsNavigation />
  );
}

