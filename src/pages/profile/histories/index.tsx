import React from 'react';

import { ProfileRouteParamList } from '../../../routes/profile.routes';

import useFetch from '../../../hooks/useFetch';

import { ActivityIndicator, ScrollView, View, Text } from 'react-native';
import styles from './styles';

const histories = ({ route }: ProfileRouteParamList) => {

  const { data, error } = useFetch('users/' + (route.params ? route.params.id ? route.params.id : 1 : 1) + '/histories');

  if (!data)
    return (
      <View style={styles.loading_container}>
        <ActivityIndicator color='#fff' size='large' />
      </View>)
  else
    return (
      <ScrollView style={styles.container}>
        <View style={styles.history_container}>
          {data.map((history: { id: number, name: string }) => (
            <Text key={history.id} style={styles.history_name}>{history.name}</Text>
          ))}
        </View>
      </ScrollView>
    )

}

export default histories;
