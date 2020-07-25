import React from 'react';

import { WriteChapterRouteParamList } from '../../../routes/writeChapter.routes';

import { View, ActivityIndicator } from 'react-native';

import useFetch from '../../../hooks/useFetch';

import Histories from '../../components/history';

const userHistories: React.FC<WriteChapterRouteParamList> = ({ navigation }) => {

  const { data } = useFetch('users/1/histories');

  if (!data)
    return (
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <ActivityIndicator color='#fff' size='large' />
      </View>
    )
  else
    return <Histories handle={(history: any) => navigation.navigate('HistoryChapters', history)} data={data} />

}

export default userHistories;
