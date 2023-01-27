import 'react-native-gesture-handler';
import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import MainNavigator from './src/navigations/mainNavigation';

import { PlayersProvider } from './src/contexts/playersContext';
import { NewTransferProvider } from './src/contexts/newTransferContext';

export default function App() {
  return (
    <NavigationContainer>
      <NewTransferProvider>
        <PlayersProvider>
          <StatusBar backgroundColor={'#007300'} barStyle='light-content' />
          <MainNavigator />
        </PlayersProvider>
      </NewTransferProvider>
    </NavigationContainer>
  )
}
