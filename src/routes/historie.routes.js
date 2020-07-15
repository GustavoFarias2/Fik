import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

import Find from '../pages/Find';
import History from '../pages/History';

class FindHistoriesRoutes extends React.Component {

  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Find"
          component={Find}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="History"
          component={History}
          options={({ route }) => { return { headerTitle: route.params.name } }}
        />
      </Stack.Navigator>
    )
  }

}

export default FindHistoriesRoutes;
