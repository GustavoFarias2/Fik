import React from 'react';

import { ScrollView, View, TouchableOpacity, Text } from 'react-native';
import styles from './styles';

const histories = ({ navigation, data }) => {

  const handleClick = (id, name) => navigation.navigate('ReadHistory', { id, name });

  return (
    <ScrollView>
      <View style={styles.container}>
        {data.map((history) =>
          <View key={history.id} style={styles.history_container}>
            <TouchableOpacity style={styles.button} onPress={() => handleClick(history.id, history.name)}>
              <Text style={styles.history_name}>{history.name}</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </ScrollView>
  )

}

export default histories;
