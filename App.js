import { NavigationContainer } from '@react-navigation/native';
import { TabsNavigation } from './router/tabs';

export default function App() {
  return (
    <NavigationContainer>
      <TabsNavigation />
    </NavigationContainer>
  );
}

