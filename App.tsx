import 'react-native-gesture-handler';
import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import MainNavigator from './src/navigations/mainNavigation';

import { PlayersProvider } from './src/contexts/playersContext';

export default function App() {
  return (
    <NavigationContainer>
      <PlayersProvider>
        <StatusBar backgroundColor={'#007300'} barStyle='light-content' />
        <MainNavigator />
      </PlayersProvider>
    </NavigationContainer>
  )
}
