import 'react-native-gesture-handler';
import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Transfers from './src/components/transfers/main/Transfers';
import CreateOrUpdate from './src/components/createOrUpdateTransfers/main';
import NewTransfer from './src/components/createOrUpdateTransfers/newTransfer';
import UpdateTransfer from './src/components/createOrUpdateTransfers/updateTransfer';

export type RootStackParamList = {
  Transfers: undefined,
  Create: undefined;
  CreateHome: undefined,
  NewTransfer: undefined
  UpdateTransfer: undefined
};

const Stack = createStackNavigator<RootStackParamList>()

function CreateOrUpdateNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#007300"
        }
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

const Tab = createBottomTabNavigator<RootStackParamList>()

function MainNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#007300',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: '#007300',
          height: 70,
          paddingBottom: 8,
          paddingTop: 8
        },
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: '#dfdfdf'
      }}
      initialRouteName="Transfers"
    >
      <Tab.Screen
        name="Transfers"
        component={Transfers}
      />
      <Tab.Screen
        name="Create"
        component={CreateOrUpdateNavigator}
        options={{ title: "Create", headerTitle: "Criar ou atualizar transferência", headerShadowVisible: false }}
      />
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={'#007300'} barStyle='light-content' />
      <MainNavigator />
    </NavigationContainer>
  );
}
