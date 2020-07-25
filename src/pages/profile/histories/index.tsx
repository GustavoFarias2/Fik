import React from 'react';

import { ProfileRouteParamList } from '../../../routes/profile.routes';

import useFetch from '../../../hooks/useFetch';

import { ActivityIndicator, ScrollView, View, Text } from 'react-native';

const histories = ({ route }: ProfileRouteParamList) => {

  const { data, error } = useFetch('users/' + (route.params ? route.params.id ? route.params.id : 1 : 1) + '/histories');

  if (!data)
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator color='#fff' size='large' />
      </View>)
  else
    return (
      <ScrollView style={{
        flex: 1,
        backgroundColor: '#1e1e1e'
      }}>
        <View style={{
          padding: 25
        }}>
          {data.map((history: { id: number, name: string }) => (
            <Text key={history.id} style={{
              color: '#fff'
            }}>
              {history.name}
            </Text>
          ))}
        </View>
      </ScrollView>
    )

}

export default histories;
