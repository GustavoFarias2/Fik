import React, { useRef } from 'react';

import { WriteChapterRouteParamList } from '../../../../../routes/writeChapter.routes';

import api from '../../../../../services/api';

import useValidate from '../../../../../hooks/useValidate';
import * as Yup from 'yup';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/mobile';

import FloatButton from '../../../../../components/floatButton/index';
import TextInput from '../../../../../components/inputs/text/index';

import { ScrollView, View, Text, Keyboard } from 'react-native';
import styles from './styles';
import { chapter } from '../index';

const create: React.FC<WriteChapterRouteParamList> = ({ navigation, route }) => {

  const formRef = useRef<FormHandles>(null);

  const handleSubmit = (data: chapter) => {
    useValidate({
      name: Yup.string().required('Insert the name to continue'),
      description: Yup.string(),
      text: Yup.string()
    }, data, formRef)
      .then(() => {
        const newChapter = { ...data, ...{ historyId: route.params?.id } };
        api.post('chapters', newChapter);

        route.params?.mutate([...route.params?.data, newChapter], false);
        Keyboard.dismiss();
        navigation.goBack();
      })
      .catch(() => { });
  }

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scroll}
        keyboardShouldPersistTaps={'handled'}
      >
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Text style={styles.label}>Chapter's name</Text>
          <TextInput
            name="name"
            customStyle={styles.input}
          />
          <Text style={styles.label}>Description</Text>
          <TextInput
            name="description"
            customStyle={{ ...styles.input_description, ...styles.input }}
            multiline={true}
            numberOfLines={4}
          />
          <Text style={styles.label}>Text</Text>
          <TextInput
            name="text"
            customStyle={{ ...styles.input_text, ...styles.input }}
            multiline={true}
            numberOfLines={10}
          />
        </Form>
      </ScrollView>

      <FloatButton
        action={() => formRef.current?.submitForm()}
        iconName='md-create'
        color='#4857c2'
      />
    </View>
  )

}

export default create;