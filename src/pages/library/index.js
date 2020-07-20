import React from 'react';

import useFetch from '../../hooks/useFetch';

import { View, Text } from 'react-native';

import Histories from '../components/history';

const library = ({ navigation }) => {

  const { data, error } = useFetch('histories');

  if (!data)
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 22, fontFamily: 'Montserrat_400Regular' }}>
          loading histories
        </Text>
      </View>
    )
  else
    return <Histories navigation={navigation} data={data} />

}

export default library;
