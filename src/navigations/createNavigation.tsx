import { createStackNavigator } from '@react-navigation/stack';

import CreateOrUpdate from '../components/createOrUpdateTransfers/main';
import NewTransfer from '../components/createOrUpdateTransfers/newTransfer';
import UpdateTransfer from '../components/createOrUpdateTransfers/updateTransfer';

import { RootStackParamList } from './mainNavigation';

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
        name="NewTransfer"
        component={NewTransfer}
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