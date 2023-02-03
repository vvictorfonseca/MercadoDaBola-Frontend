import { createStackNavigator } from '@react-navigation/stack';

import CreateOrUpdate from '../components/createOrUpdateTransfers/main';
import NewTransfer from '../components/createOrUpdateTransfers/newTransfer';
import CreatePlayer from '../components/createOrUpdateTransfers/newTransfer/SetNewTransfer/CreatePlayer';
import CreateClub from '../components/createOrUpdateTransfers/newTransfer/SetNewTransfer/CreateClub';
import UpdateTransfer from '../components/createOrUpdateTransfers/updateTransfer';

import { RootStackParamList } from './mainNavigation';

const CreatePlayerAndClub = createStackNavigator<RootStackParamList>()

function CreatePlayerOrClubNavigator() {
  return (
    <CreatePlayerAndClub.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#007300"
        },
      }}
    >
      <CreatePlayerAndClub.Screen 
        name='NewTransfer'
        component={ NewTransfer }
        options={{ title: "", headerTintColor: "#fff", headerShown: false }}
      />

      <CreatePlayerAndClub.Screen 
        name='CreatePlayer'
        component={ CreatePlayer }
        options={{ title: "", headerTintColor: "#fff", headerShown: false}}
      />

      <CreatePlayerAndClub.Screen 
        name='CreateClub'
        component={ CreateClub }
        options={{ title: "", headerTintColor: "#fff", headerShown: false }}
      />

    </CreatePlayerAndClub.Navigator>
  )
}

const Stack = createStackNavigator<RootStackParamList>()

export default function CreateOrUpdateNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#007300"
        },
      }}

    >
      <Stack.Screen
        name="CreateHome"
        component={CreateOrUpdate}
        options={{ title: "", headerShown: false }}
      />
      <Stack.Screen
        name="NewTransferAndCreate"
        component={CreatePlayerOrClubNavigator}
        options={{ title: "", headerTintColor: "#fff" }}
      />
      <Stack.Screen
        name="UpdateTransfer"
        component={UpdateTransfer}
        options={{ title: "", headerTintColor: "#fff" }}
      />
    </Stack.Navigator>
  )
}