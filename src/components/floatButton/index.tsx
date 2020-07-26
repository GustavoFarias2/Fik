import React from 'react';

import { View, TouchableOpacity } from 'react-native';
import styles from './styles';

import { Ionicons } from '@expo/vector-icons';

type FloatButtonProps = {
  action: (any: any) => any,
  iconName?: string,
  color?: string
}

const FloatButton: React.FC<FloatButtonProps> = ({ action, iconName, color }) => {

  return (
    <View style={styles.button_container}>
      <View style={{ ...styles.button_background, ...{ backgroundColor: color ? color : '#1e1e1e' } }}>
        <TouchableOpacity style={styles.button} onPress={action}>
          <Ionicons name={iconName || 'md-send'} size={30} color='#d1d1d1' />
        </TouchableOpacity>
      </View>
    </View>
  )

}

export default FloatButton;
