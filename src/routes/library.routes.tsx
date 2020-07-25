import React from 'react';

import { RouteProp } from '@react-navigation/native';
import { 
  createStackNavigator, 
  CardStyleInterpolators,
  StackNavigationProp
} from '@react-navigation/stack';
const Stack = createStackNavigator();

import Library from '../pages/library';

import ReadHistory from '../pages/readHistory';
import ReadChapter from '../pages/readHistory/readChapter';

type NavigationProps = {
  ReadHistory: any | undefined,
  ReadChapter: any | undefined
}

export type LibraryRouteParamList = {
  navigation: StackNavigationProp<NavigationProps>,
  route: RouteProp<NavigationProps, 'ReadHistory' | 'ReadChapter'>
}

class LibraryRoutes extends React.Component {

  render() {
    return (
      <Stack.Navigator screenOptions={{ cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }}>

        <Stack.Screen
          name="Library"
          component={Library}
        />

        <Stack.Screen
          name="ReadHistory"
          component={ReadHistory}
          options={({ route }: LibraryRouteParamList) => { return { headerTitle: route.params?.name } }}
        />
        <Stack.Screen
          name="ReadChapter"
          component={ReadChapter}
          options={{ headerShown: false }}
        />

      </Stack.Navigator>
    )
  }

}

export default LibraryRoutes;
