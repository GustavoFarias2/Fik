import React from 'react';

import { ScrollView, View, TouchableOpacity, Text } from 'react-native';

const histories = ({ navigation, data }) => {

  const handleClick = (id, name) => navigation.navigate('History', { id, name });

  return (
    <ScrollView style={{ padding: 10 }}>
      {
        data.map((history) =>
          <View key={history.id} style={{
            marginVertical: 4,
            backgroundColor: '#1e1e1e',
            borderRadius: 2
          }}>
            <TouchableOpacity
              style={{
                padding: 15,
              }}
              onPress={() => handleClick(history.id, history.name)}
            >
              <Text style={{
                color: '#fff',
                fontSize: 18,
                fontFamily: 'Montserrat_400Regular'
              }}>
                {history.name}
              </Text>
            </TouchableOpacity>
          </View>
        )
      }
    </ScrollView>
  )

}

export default histories;
