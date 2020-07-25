import React from 'react';

import { RouteProp } from '@react-navigation/native';
import { BottomTabNavigationProp, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tabs = createBottomTabNavigator();

import LibraryRoutes from './library.routes';
import FindHistoriesRoutes from './find.routes';
import WriteRoutes from './write.routes';
import ProfileRoutes from './profile.routes';

type NavigationProps = {
  LibraryRoutes: any | undefined,
  FindHistoriesRoutes: any | undefined,
  WriteRoutes: any | undefined,
  ProfileRoutes: any | undefined
}

export type AppRouteParamList = {
  navigation: BottomTabNavigationProp<NavigationProps>,
  route: RouteProp<NavigationProps, 'LibraryRoutes' | 'FindHistoriesRoutes' | 'WriteRoutes' | 'ProfileRoutes'>
}

import { Ionicons } from '@expo/vector-icons';
const returnIcon = (name: string) => ({ route }: AppRouteParamList) => {
  return {
    tabBarIcon: ({ color }: { color: string }) => (<Ionicons name={name} color={color} size={24} />),
    // tabBarVisible: route.state?.routes[route.state?.routes.length - 1]?.name === "ReadChapter" ? false : true
  }
}

class AppRoutes extends React.Component {

  render() {
    return (
      <Tabs.Navigator
        tabBarOptions={{
          showLabel: false,
          keyboardHidesTabBar: true
        }}
      >
        <Tabs.Screen
          name="LibraryRoutes"
          component={LibraryRoutes}
          options={returnIcon('ios-folder-open')}
        />
        <Tabs.Screen
          name="FindHistoriesRoutes"
          component={FindHistoriesRoutes}
          options={returnIcon('ios-search')}
        />
        <Tabs.Screen
          name="WriteRoutes"
          component={WriteRoutes}
          options={returnIcon('ios-create')}
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
