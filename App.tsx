import 'react-native-gesture-handler';
import { StatusBar } from 'react-native';

import { NativeBaseProvider } from 'native-base';

import { NavigationContainer } from '@react-navigation/native';

import MainNavigator from './src/navigations/mainNavigation';

import { PlayersProvider } from './src/contexts/playersContext';
import { ClubsProvider } from './src/contexts/clubsContext';
import { NewTransferProvider } from './src/contexts/newTransferContext';

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <NewTransferProvider>
          <PlayersProvider>
            <ClubsProvider>
              <StatusBar backgroundColor={'#007300'} barStyle='light-content' />
              <MainNavigator />
            </ClubsProvider>
          </PlayersProvider>
        </NewTransferProvider>
      </NavigationContainer>
    </NativeBaseProvider>
  )
}
