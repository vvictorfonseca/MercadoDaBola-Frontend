import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text } from 'react-native';

import Transfers from '../components/transfers/main/Transfers';
import CreateOrUpdateNavigator from './createNavigation';

import { Ionicons } from "@expo/vector-icons/"

export type RootStackParamList = {
  Transfers: undefined,
  Create: undefined;
  CreateHome: undefined,
  NewTransferAndCreate: undefined,
  NewTransfer: undefined,
  CreatePlayer: undefined,
  CreateClub: undefined,
  UpdateTransfer: undefined
};

const Tab = createBottomTabNavigator<RootStackParamList>()

export default function MainNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: '#007300',
          height: 90,
          bottom: 15,
          left: 20,
          right: 20,
          paddingBottom: 8,
          paddingTop: 8,
          borderRadius: 15
        },
        headerStyle: {
          backgroundColor: '#007300',
        },
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTintColor: '#fff',
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: '#dfdfdf',
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true
      }}
      initialRouteName="Transfers"
    >

      <Tab.Screen
        name="Transfers"
        component={Transfers}
        options={{
          title: "Create",
          headerTitle: "Criar ou atualizar transferência",
          headerShadowVisible: false,
          tabBarLabel: "Create/Update",
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Ionicons name='checkmark-circle' color={"#fff"} style={{ opacity: focused ? 1 : 0.8 }} size={35} />
              <Text style={{ color: "#fff", fontWeight: 'bold', opacity: focused ? 1 : 0.8 }}> Transfers</Text>
            </View>
          )
        }}
      />

      <Tab.Screen
        name="Create"
        component={CreateOrUpdateNavigator}
        options={{
          title: "Create",
          headerTitle: "Criar ou atualizar transferência",
          headerShadowVisible: false,
          tabBarLabel: "Create/Update",
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Ionicons name="create" color={"#fff"} style={{ opacity: focused ? 1 : 0.8 }} size={35} />
              <Text style={{ color: "#fff", opacity: focused ? 1 : 0.8, fontWeight: 'bold' }}>Create</Text>
            </View>
          )
        }}
      />

    </Tab.Navigator>
  )
}