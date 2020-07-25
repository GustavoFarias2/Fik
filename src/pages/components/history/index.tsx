import React from 'react';

import { ScrollView, View, TouchableOpacity, Text } from 'react-native';
import styles from './styles';

type history = {
  id: number,
  name: string
}

const histories = ({ navigation, data }: { navigation: any, data: history[] }) => {

  const handleClick = (history: history) => navigation.navigate('ReadHistory', history);

  return (
    <ScrollView>
      <View style={styles.container}>
        {data.map((history) =>
          <View key={history.id} style={styles.history_container}>
            <TouchableOpacity style={styles.button} onPress={() => handleClick(history)}>
              <Text style={styles.history_name}>{history.name}</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </ScrollView>
  )

}

export default histories;
