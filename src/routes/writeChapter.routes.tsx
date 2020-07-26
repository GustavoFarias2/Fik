import React from 'react';

import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp, createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
const Stack = createStackNavigator();

import UserHistories from '../pages/write/userHistories';
import HistoryChapters from '../pages/write/userHistories/historyChapters';
import Chapter from '../pages/write/userHistories/historyChapters/chapter/index';
import Create from '../pages/write/userHistories/historyChapters/create/index';

type NavigationProps = {
  UserHistories: any | undefined,
  HistoryChapters: any | undefined,
  Chapter: any | undefined,
  Create: any | undefined,
}

export type WriteChapterRouteParamList = {
  navigation: StackNavigationProp<NavigationProps>,
  route: RouteProp<NavigationProps, 'UserHistories' | 'HistoryChapters' | 'Chapter' | 'Create'>
}

class writeChapter extends React.Component {

  render() {
    return (
      <Stack.Navigator screenOptions={{ cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS }}>

        <Stack.Screen
          name="UserHistories"
          component={UserHistories}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HistoryChapters"
          component={HistoryChapters}
          options={({ route }: WriteChapterRouteParamList) => { return { title: route.params?.name } }}
        />
        <Stack.Screen
          name="Chapter"
          component={Chapter}
          options={({ route }: WriteChapterRouteParamList) => { return { title: route.params?.name } }}
        />
        <Stack.Screen
          name="Create"
          component={Create}
          options={{ title: 'Create a new chapter' }}
        />

      </Stack.Navigator>
    )
  }

}

export default writeChapter;
