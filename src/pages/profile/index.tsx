import React from 'react';

import { ProfileRouteParamList } from '../../routes/profile.routes';

import useFetch from '../../hooks/useFetch';

import { Ionicons } from '@expo/vector-icons';

import { ActivityIndicator, View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const profile = ({ navigation }: ProfileRouteParamList) => {

  const { data, error } = useFetch('users/1?_embed=histories');

  const handleClickMenu = () => navigation.openDrawer();
  const handleClickHistories = () => navigation.navigate('Histories');

  if (!data)
    return (
      <View style={{ flex: 1, backgroundColor: '#1e1e1e', justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator color='#fff' size='large' />
      </View>)
  else
    return (
      <View style={styles.container}>
        <View style={styles.icon_container}>
          <Ionicons name="md-menu" size={32} color="#fff" onPress={() => handleClickMenu()} style={styles.menu_icon} />
        </View>
        <View style={styles.profile_container}>
          <View style={styles.photo_and_counts_container}>

            <View style={styles.count_container}>
              <TouchableOpacity style={styles.count} onPress={() => handleClickHistories()}>
                <Text style={styles.count_number}>{data.histories.length}</Text>
                <Text style={styles.count_text}>Histories</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.photo_container}>
              <View style={styles.photo}>
              </View>
            </View>
            <View style={styles.count_container}>
              <View style={styles.count}>
                <Text style={styles.count_number}>0</Text>
                <Text style={styles.count_text}>Characters</Text>
              </View>
            </View>

          </View>

          <View style={styles.info_container}>
            <Text style={styles.name}>{data.name}</Text>
            <Text style={styles.description}>{data.description}</Text>
          </View>

        </View>

        <View style={styles.histories_and_characters}>
          {/* <Tab.Navigator>
          <Tab.Screen name='Teste' component={Random} />
          <Tab.Screen name='Teste1' component={Random1} />
          </Tab.Navigator> */}
        </View>
      </View>
    )

}

export default profile;
