import React from 'react';

import { ScrollView, View, TouchableOpacity, Text } from 'react-native';
import styles from './styles';
import history from '../../readHistory/index';

type history = {
  id: number,
  name: string
}

const histories = ({ data, handle }: {  data: history[], handle?: (history: history) => void }) => {

  const handleClick = handle ? handle : () => {};

  return (
    <ScrollView>
      <View style={styles.container}>
        {data.map((history, i) =>
          <View key={history.id + '/' + i} style={styles.history_container}>
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
