import React from 'react';

import useFetch from '../../../hooks/useFetch';

import { ScrollView, View, Text } from 'react-native';

const histories = ({ navigation, route }) => {

  const { data, error } = useFetch('users/' + (route.params ? route.params.id ? route.params.id : 1 : 1) + '/histories');

  if (!data)
    return (
      <View style={{ flex: 1, backgroundColor: '#1e1e1e', justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 22, color: '#fff', fontFamily: 'Montserrat_400Regular' }}>
          loading histories
      </Text>
      </View>
    )
  else
    return (
      <ScrollView style={{
        flex: 1,
        backgroundColor: '#1e1e1e'
      }}>
        <View style={{
          padding: 25
        }}>
          {data.map((history) => (
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
