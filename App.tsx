import 'react-native-gesture-handler';
import { StatusBar } from 'react-native';

import { NativeBaseProvider } from 'native-base';

import { NavigationContainer } from '@react-navigation/native';

import MainNavigator from './src/navigations/mainNavigation';

import { PlayersProvider } from './src/contexts/playersContext';
import { ClubsProvider } from './src/contexts/clubsContext';
import { NewTransferProvider } from './src/contexts/newTransferContext';
import { NgrokUrlProvider } from './src/contexts/ngrokUrlContext';
import { UpdateTransfersProvider } from './src/contexts/updateTransfersContext';
import { PlayerIdProvider } from './src/contexts/playerIdContext';
import { AdminProvider } from './src/contexts/adminContext';

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <NgrokUrlProvider>
          <AdminProvider>
            <PlayerIdProvider>
              <UpdateTransfersProvider>
                <NewTransferProvider>
                  <PlayersProvider>
                    <ClubsProvider>
                      <StatusBar backgroundColor={'#007300'} barStyle='light-content' />
                      <MainNavigator />
                    </ClubsProvider>
                  </PlayersProvider>
                </NewTransferProvider>
              </UpdateTransfersProvider>
            </PlayerIdProvider>
          </AdminProvider>
        </NgrokUrlProvider>
      </NavigationContainer>
    </NativeBaseProvider>
  )
}
