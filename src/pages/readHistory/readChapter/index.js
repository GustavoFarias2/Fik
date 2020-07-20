import React from 'react';

import useFetch from '../../../hooks/useFetch';

import { ScrollView, View, Text, StatusBar } from 'react-native';

const readChapter = ({ route }) => {

  const { data, error } = useFetch('Chapters/' + route.params?.chapter.id);

  if (!data)
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 22, fontFamily: 'Montserrat_400Regular' }}>
          loading chapter
        </Text>
      </View>
    )
  else
    return (
      <>
        <StatusBar hidden={true} animated={true} />

        <ScrollView>
          <View style={{
            padding: 25
          }}>
            <Text style={{
              fontSize: 20,
              fontFamily: 'Montserrat_700Bold',
              marginBottom: 15
            }}>
              {data.name}
            </Text>
            <Text style={{
              fontSize: 18,
              fontFamily: 'Montserrat_400Regular'
            }}>
              {data.text}
            </Text>
          </View>
        </ScrollView>
      </>
    )

}

export default readChapter;
