import React from 'react';

import { RouteProp } from '@react-navigation/native';
import { BottomTabNavigationProp, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tabs = createBottomTabNavigator();

import FindHistoriesRoutes from './find.routes';
import LibraryRoutes from './library.routes';
import ProfileRoutes from './profile.routes';

type NavigationProps = {
  FindHistoriesRoutes: any | undefined,
  LibraryRoutes: any | undefined,
  ProfileRoutes: any | undefined
}

export type AppRouteParamList = {
  navigation: BottomTabNavigationProp<NavigationProps>,
  route: RouteProp<NavigationProps, 'FindHistoriesRoutes' | 'LibraryRoutes' | 'ProfileRoutes'>
}

import { Ionicons } from '@expo/vector-icons';
const returnIcon = (name: string) => ({ route }: AppRouteParamList) => {
  return {
    tabBarIcon: ({ color }: { color: string }) => (<Ionicons name={name} color={color} size={24} />),
    // Remove tabs when reading (actual causing bug)
    // When back, the page go back a little bit
    // this causes the screan shake
    // tabBarVisible: route.state?.routes[route.state?.routes.length - 1]?.name === "ReadChapter" ? false : true
  }
}

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
        <Tabs.Screen
          name="ProfileRoutes"
          component={ProfileRoutes}
          options={returnIcon('ios-person')}
        />

      </Tabs.Navigator>
    )
  }

}

export default AppRoutes;
