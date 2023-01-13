import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Transfers from './src/components/transfers/main/Transfers';
import CreateTransfer from './src/components/createOrUpdateTransfers/main/CreateOrUpdate';

const Tab = createBottomTabNavigator()

function MainNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Transfers" component={Transfers} />
      <Tab.Screen name="Create" component={CreateTransfer} />
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
}
