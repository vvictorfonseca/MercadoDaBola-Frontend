import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text } from 'react-native';

import ConfirmedTranfers from '../components/transfers/ConfirmedTransfers';
import DealingTransfers from '../components/transfers/DealingTranfers';
import CanceledTranfers from '../components/transfers/CanceledTransfers';
import CreateOrUpdateNavigator from './createNavigation';

import { Ionicons } from "@expo/vector-icons/"

export type RootStackParamList = {
  ConfirmedTranfers: undefined,
  DealingTransfers: undefined,
  CanceledTranfers: undefined,
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
        name='ConfirmedTranfers'
        component={ConfirmedTranfers}
        options={{
          title: "Create",
          headerTitle: "Transferências Confirmadas",
          headerShadowVisible: false,
          tabBarLabel: "Create/Update",
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Ionicons name='checkmark-circle' color={"#fff"} style={{ opacity: focused ? 1 : 0.8 }} size={30} />
              <Text style={{ color: "#fff", fontSize: 12, fontWeight: 'bold', opacity: focused ? 1 : 0.8 }}>Confirmado</Text>
            </View>
          )
        }}
      />

      <Tab.Screen
        name='DealingTransfers'
        component={DealingTransfers}
        options={{
          title: "Create",
          headerTitle: "Transferências em Negociação",
          headerShadowVisible: false,
          tabBarLabel: "Create/Update",
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Ionicons name='briefcase-sharp' color={"#fff"} style={{ opacity: focused ? 1 : 0.8 }} size={30} />
              <Text style={{ color: "#fff", fontSize: 12, fontWeight: 'bold', opacity: focused ? 1 : 0.8 }}>Negociando</Text>
            </View>
          )
        }}
      />

      <Tab.Screen
        name='CanceledTranfers'
        component={CanceledTranfers}
        options={{
          title: "Create",
          headerTitle: "Transferências que Melaram",
          headerShadowVisible: false,
          tabBarLabel: "Create/Update",
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Ionicons name='close-circle' color={"#fff"} style={{ opacity: focused ? 1 : 0.8 }} size={30} />
              <Text style={{ color: "#fff", fontSize: 12, fontWeight: 'bold', opacity: focused ? 1 : 0.8 }}>Melou</Text>
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
              <Ionicons name="create" color={"#fff"} style={{ opacity: focused ? 1 : 0.8 }} size={30} />
              <Text style={{ color: "#fff", fontSize: 12, opacity: focused ? 1 : 0.8, fontWeight: 'bold' }}>Create</Text>
            </View>
          )
        }}
      />

    </Tab.Navigator>
  )
}