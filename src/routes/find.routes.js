import React from 'react';

import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
const Stack = createStackNavigator();

import Find from '../pages/find';

import ReadHistory from '../pages/readHistory';
import ReadChapter from '../pages/readHistory/readChapter';

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
          options={({ route }) => { return { headerTitle: route.params.name } }}
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
