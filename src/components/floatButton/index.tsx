import React from 'react';

import { View, TouchableOpacity } from 'react-native';
import styles from './styles';

import { Ionicons } from '@expo/vector-icons';

const FloatButton: React.FC<{ action: () => void }> = ({ action }) => {

  return (
    <View style={styles.button_container}>
      <View style={styles.button_background}>
        <TouchableOpacity style={styles.button} onPress={action}>
          <Ionicons name='md-send' size={30} color='#d1d1d1' />
        </TouchableOpacity>
      </View>
    </View>
  )

}

export default FloatButton;
