import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tabs = createBottomTabNavigator();

import { Ionicons } from '@expo/vector-icons';

const returnIcon = (name) => {
  return { tabBarIcon: ({ color }) => (<Ionicons name={name} color={color} size={24} />) }
}

import FindHistoriesRoutes from './historie.routes';

class AppRoutes extends React.Component {

  render() {
    return (
      <Tabs.Navigator tabBarOptions={{ showLabel: false }}>
        <Tabs.Screen name="FindHistoriesRoutes" component={FindHistoriesRoutes} options={returnIcon('md-book')} />
      </Tabs.Navigator>
    )
  }

}

export default AppRoutes;
