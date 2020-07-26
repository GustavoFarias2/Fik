import React from 'react';

import { WriteChapterRouteParamList } from '../../../../routes/writeChapter.routes';

import useFetch from '../../../../hooks/useFetch';

import { ScrollView, View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import styles from './styles';
import FloatButton from '../../../../components/floatButton/index';

type chapter = {
  historyId: number,
  id: number,
  name: string,
  text: string
}

const historyChapters: React.FC<WriteChapterRouteParamList> = ({ route }) => {

  const { data } = useFetch('histories/' + route.params?.id + '/chapters');

  if (!data)
    return (
      <View style={styles.loading_container}>
        <ActivityIndicator color='#fff' size='large' />
      </View>)

  return (
    <View style={styles.container}>
      <ScrollView style={styles.chapters_container}>
        {data.map((chapter: chapter) => (
          <TouchableOpacity key={chapter.id}>
            <Text style={styles.chapter_name}>{chapter.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <FloatButton action={() => { }} buttonStyle={{ margin: 10, backgroundColor: '#4857c2' }} iconName="md-add" />
    </View>
  )
}

export default historyChapters;