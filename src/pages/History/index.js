import React from 'react';

import useFetch from '../../hooks/useFetch';

import { ScrollView, View, TouchableOpacity, Text } from 'react-native';

const history = ({ route }) => {

  const { data, error } = useFetch('histories/' + route.params?.id);

  if (!data)
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 22, fontFamily: 'Montserrat_400Regular' }}>
          loading history
        </Text>
      </View>
    )
  else
    return (
      <ScrollView style={{ padding: 25 }}>
        <Text style={{
          fontSize: 32,
          fontFamily: 'Montserrat_700Bold',
          marginBottom: 20
        }}>
          {data.name}
        </Text>
        <Text style={{
          fontSize: 24,
          fontFamily: 'Montserrat_400Regular',
          marginBottom: 10
        }}>
          Chapters:
        </Text>
        <View style={{
          borderWidth: 0,
          borderTopWidth: 1,
          borderColor: '#1e1e1e',
          paddingTop: 10
        }}>
          {
            data.chapters?.map((chapter) => (
              <View key={chapter.id}>
                <TouchableOpacity>
                  <Text style={{
                    fontSize: 18,
                    fontFamily: 'Montserrat_400Regular'
                  }}>
                    {chapter.name}
                  </Text>
                </TouchableOpacity>
              </View>
            ))
          }
        </View>
      </ScrollView>
    )

}

export default history;
