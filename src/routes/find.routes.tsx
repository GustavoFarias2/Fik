import React from 'react';

import { RouteProp } from '@react-navigation/native';
import { 
  createStackNavigator, 
  CardStyleInterpolators,
  StackNavigationProp
} from '@react-navigation/stack';
const Stack = createStackNavigator();

import Find from '../pages/find';

import ReadHistory from '../pages/readHistory';
import ReadChapter from '../pages/readHistory/readChapter';

type NavigationProps = {
  Find: any | undefined,
  ReadHistory: any | undefined,
  ReadChapter: any | undefined
}

export type FindRouteParamList = {
  navigation: StackNavigationProp<NavigationProps>,
  route: RouteProp<NavigationProps, 'Find' |'ReadHistory' | 'ReadChapter'>
}

class FindHistoriesRoutes extends React.Component {

  render() {
    return (
      <Stack.Navigator screenOptions={{ cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }}>

        <Stack.Screen
          name="Find"
          component={Find}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="ReadHistory"
          component={ReadHistory}
          options={({ route }: FindRouteParamList) => { return { headerTitle: route.params?.name } }}
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

export default FindHistoriesRoutes;
