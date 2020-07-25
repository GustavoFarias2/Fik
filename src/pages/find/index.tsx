import React from 'react';

import { FindRouteParamList } from '../../routes/find.routes';

import useFetch from '../../hooks/useFetch';

import { ActivityIndicator, View } from 'react-native';

import Histories from '../components/history';
import styles from './styles';

const find = ({ navigation }: FindRouteParamList) => {

  const { data, error } = useFetch('histories');

  if (!data)
    return (
      <View style={styles.container}>
        <ActivityIndicator color='#fff' size='large' />
      </View>
    )
  else
    return <Histories handle={(history: any) => navigation.navigate('ReadHistory', history)} data={data} />

}

export default find;
