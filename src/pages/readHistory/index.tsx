import React from 'react';

import { LibraryRouteParamList } from '../../routes/library.routes';

import useFetch from '../../hooks/useFetch';

import { ActivityIndicator, ScrollView, View, TouchableOpacity, Text } from 'react-native';
import styles from './styles';

type chapter = {
  id: number,
  name: string,
  text: string
};

const history = ({ route, navigation }: LibraryRouteParamList) => {

  const { data, error } = useFetch('histories/' + route.params?.id + '?_embed=chapters');

  const handleClick = (chapter: chapter) => navigation.navigate('ReadChapter', chapter);

  if (!data)
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator color='#fff' size='large' />
      </View>)
  else
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>{data.name}</Text>
          <Text style={styles.description}>{data.description}</Text>
          {data.chapters.length > 0 && <>
            <Text style={styles.chapters}>Chapters:</Text>
            <View style={styles.chapters_container}>
              {data.chapters?.map((chapter: chapter) => (
                <View key={chapter.id} style={styles.chapter_container}>
                  <TouchableOpacity onPress={() => handleClick(chapter)}>
                    <Text style={styles.chapter_name}>{chapter.name}</Text>
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          </>}
        </View>
      </ScrollView>
    )

}

export default history;
