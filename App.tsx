import 'react-native-gesture-handler';
import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import MainNavigator from './src/navigations/mainNavigation';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={'#007300'} barStyle='light-content' />
      <MainNavigator />
    </NavigationContainer>
  )
}
