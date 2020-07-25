import React from 'react';

import { RouteProp } from '@react-navigation/native';
import { MaterialTopTabNavigationProp, createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const Stack = createMaterialTopTabNavigator();

import WriteChapter from './writeChapter.routes';
import Write from '../pages/write/create';

type NavigationProps = {
  WriteChapter: any | undefined,
  Write: any | undefined
}

export type WriteRouteParamList = {
  navigation: MaterialTopTabNavigationProp<NavigationProps>,
  route: RouteProp<NavigationProps, 'WriteChapter' | 'Write'>
}
// | 
class WriteRoutes extends React.Component {

  render() {
    return (
      <Stack.Navigator>

        <Stack.Screen
          name="WriteChapter"
          component={WriteChapter}
          options={{ title: 'My Histories' }}
        />
        <Stack.Screen
          name="Write"
          component={Write}
        />

      </Stack.Navigator>
    )
  }

}

export default WriteRoutes;
