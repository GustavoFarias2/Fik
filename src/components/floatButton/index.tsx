import React from 'react';

import { View, TouchableOpacity } from 'react-native';
import styles from './styles';

import { Ionicons } from '@expo/vector-icons';

type FloatButtonProps = {
  action: () => void,
  iconName?: string,
  buttonStyle?: {},
  iconStyle?: {}
}

const FloatButton: React.FC<FloatButtonProps> = ({ action, iconName, buttonStyle, iconStyle }) => {

  return (
    <View style={styles.button_container}>
      <View style={{ ...styles.button_background, ...buttonStyle }}>
        <TouchableOpacity style={{ ...styles.button, ...iconStyle }} onPress={action}>
          <Ionicons name={iconName || 'md-send'} size={30} color='#d1d1d1' />
        </TouchableOpacity>
      </View>
    </View>
  )

}

export default FloatButton;
