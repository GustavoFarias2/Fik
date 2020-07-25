import React from 'react';

import { LibraryRouteParamList } from '../../../routes/library.routes';

import useFetch from '../../../hooks/useFetch';

import { ActivityIndicator, ScrollView, View, Text, StatusBar } from 'react-native';
import styles from './styles';

const readChapter = ({ route }: LibraryRouteParamList) => {

  const { data, error } = useFetch('Chapters/' + route.params?.id);

  if (!data)
    return (
      <View style={styles.loading_container}>
        <ActivityIndicator color='#fff' size='large' />
      </View>)
  else
    return (
      <>
        <StatusBar hidden={true} animated={true} />

        <ScrollView style={styles.container}>
          <View style={styles.container_padding}>
            <Text style={styles.chapter_name}>{data.name}</Text>
            <Text style={styles.chapter_text}>{data.text}</Text>
          </View>
        </ScrollView>
      </>
    )

}

export default readChapter;
