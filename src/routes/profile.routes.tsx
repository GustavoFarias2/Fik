import React from 'react';

import { RouteProp } from '@react-navigation/native';
import { createDrawerNavigator, DrawerNavigationProp } from '@react-navigation/drawer';
const Drawner = createDrawerNavigator();

import Profile from '../pages/profile';
import EditProfile from '../pages/profile/editProfile';
import Histories from '../pages/profile/histories';

type NavigationProps = {
  Profile: any | undefined,
  EditProfile: any | undefined,
  Histories: any | undefined
}

export type ProfileRouteParamList = {
  navigation: DrawerNavigationProp<NavigationProps>,
  route: RouteProp<NavigationProps, 'Profile' | 'EditProfile' | 'Histories'>
}

class ProfileRoutes extends React.Component {

  render() {
    return (
      <Drawner.Navigator
        initialRouteName="Profile"
        drawerPosition="right"
      >

        <Drawner.Screen
          name="Profile"
          component={Profile}
        />
        <Drawner.Screen
          name="EditProfile"
          component={EditProfile}
          options={{ drawerLabel: 'Edit your Profile' }}
        />
        <Drawner.Screen
          name="Histories"
          component={Histories}
          options={{ drawerLabel: 'Your Histories' }}
        />

      </Drawner.Navigator>
    )
  }

}

export default ProfileRoutes;
