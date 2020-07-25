import React from 'react';

import { FindRouteParamList } from '../../routes/find.routes';

import useFetch from '../../hooks/useFetch';

import { ActivityIndicator, View } from 'react-native';

import Histories from '../components/history';

const find = ({ navigation }: FindRouteParamList) => {

  const { data, error } = useFetch('histories');

  if (!data)
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator color='#fff' size='large' />
      </View>
    )
  else
    return <Histories navigation={navigation} data={data} />

}

export default find;
