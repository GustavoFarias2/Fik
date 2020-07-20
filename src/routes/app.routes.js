import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tabs = createBottomTabNavigator();

import { Ionicons } from '@expo/vector-icons';

const returnIcon = (name) => ({ route }) => {
  return {
    tabBarIcon: ({ color }) => (<Ionicons name={name} color={color} size={24} />),
    tabBarVisible: route.state?.routes[route.state?.routes.length - 1]?.name === "ReadChapter" ? false : true
  }
}

import FindHistoriesRoutes from './find.routes';
import LibraryRoutes from './library.routes';

class AppRoutes extends React.Component {

  render() {
    return (
      <Tabs.Navigator
        tabBarOptions={{ showLabel: false }}
      >
        <Tabs.Screen
          name="FindHistoriesRoutes"
          component={FindHistoriesRoutes}
          options={returnIcon('md-book')}
        />
        <Tabs.Screen
          name="LibraryRoutes"
          component={LibraryRoutes}
          options={returnIcon('ios-folder-open')}
        />
      </Tabs.Navigator>
    )
  }

}

export default AppRoutes;
