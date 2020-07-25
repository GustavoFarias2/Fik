import React from 'react';

import { LibraryRouteParamList } from '../../../routes/library.routes';

import useFetch from '../../../hooks/useFetch';

import { ActivityIndicator, ScrollView, View, Text, StatusBar } from 'react-native';

const readChapter = ({ route }: LibraryRouteParamList) => {

  const { data, error } = useFetch('Chapters/' + route.params?.id);

  if (!data)
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator color='#fff' size='large' />
      </View>)
  else
    return (
      <>
        <StatusBar hidden={true} animated={true} />

        <ScrollView style={{
          backgroundColor: '#000'
        }}>
          <View style={{
            padding: 25
          }}>
            <Text style={{
              fontSize: 20,
              fontFamily: 'Montserrat_700Bold',
              marginBottom: 15,
              color: '#fff'
            }}>
              {data.name}
            </Text>
            <Text style={{
              fontSize: 18,
              fontFamily: 'Montserrat_400Regular',
              color: '#fff'
            }}>
              {data.text}
            </Text>
          </View>
        </ScrollView>
      </>
    )

}

export default readChapter;
