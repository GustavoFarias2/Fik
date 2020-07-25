import React from 'react';

import { LibraryRouteParamList } from '../../routes/library.routes';

import useFetch from '../../hooks/useFetch';

import { ActivityIndicator, View } from 'react-native';
import styles from './styles';

import Histories from '../components/history';

const library = ({ navigation }: LibraryRouteParamList) => {

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

export default library;
