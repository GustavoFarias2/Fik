import React from 'react';

import { WriteChapterRouteParamList } from '../../../../routes/writeChapter.routes';

import useFetch from '../../../../hooks/useFetch';

import { ScrollView, View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import styles from './styles';
import FloatButton from '../../../../components/floatButton/index';

export type chapter = {
  historyId: number,
  id: number,
  name: string,
  text: string
}

const historyChapters: React.FC<WriteChapterRouteParamList> = ({ navigation, route }) => {

  const { data, mutate } = useFetch('histories/' + route.params?.id + '/chapters');

  const handleClickChapter = (chapter: chapter) => navigation.navigate('Chapter', chapter);

  const handleClickCreate = () => navigation.navigate('Create', { id: route.params?.id, mutate, data });

  if (!data)
    return (
      <View style={styles.loading_container}>
        <ActivityIndicator color='#fff' size='large' />
      </View>)

  return (
    <View style={styles.container}>
      <ScrollView style={styles.chapters_container}>
        {data.map((chapter: chapter, i: number) => (
          <TouchableOpacity
            key={chapter.id + '/' + i}
            onPress={() => handleClickChapter(chapter)}
          >
            <Text style={styles.chapter_name}>{chapter.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <FloatButton action={handleClickCreate} color='#4857c2' iconName="md-add" />
    </View>
  )
}

export default historyChapters;