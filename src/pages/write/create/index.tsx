import React, { useRef } from 'react';

import { WriteRouteParamList } from '../../../routes/write.routes';

import useFetch from '../../../hooks/useFetch';
import api from '../../../services/api';

import useValidate from '../../../hooks/useValidate';
import * as Yup from 'yup';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/mobile';
import TextInput from '../../../components/inputs/text/index';

import { View, Text, Keyboard } from 'react-native';
import FloatButton from '../../../components/floatButton/index';
import styles from './styles';

const write: React.FC<WriteRouteParamList> = ({ navigation }) => {

  const { data, mutate } = useFetch('users/1/histories');

  const formRef = useRef<FormHandles>(null);

  const handleSubmit = async (history: { name: string, description: string }) => {
    await useValidate({
      name: Yup.string().required('Please insert the name to continue'),
      description: Yup.string()
    }, history, formRef)
      .then(() => {
        api.post('histories', { ...history, userId: 1 });
        mutate([...data, history], false);
        Keyboard.dismiss();
        formRef.current?.reset();
        navigation.dangerouslyGetParent()?.navigate('UserHistories');
      })
      .catch(() => { });
  }

  return (
    <View style={styles.container}>
      <View style={styles.title_container}>
        <Text style={styles.title}>
          Lets start a new World!
        </Text>
      </View>

      <View style={styles.form_container}>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Text style={styles.label}>The name of the History!</Text>
          <TextInput name="name" placeholder="The History name" />
          <Text style={styles.label}>Description</Text>
          <TextInput
            name="description"
            placeholder="History description"
            multiline={true}
            numberOfLines={8}
            customStyle={styles.input}
          />
        </Form>
      </View>

      <FloatButton action={() => formRef.current?.submitForm()} />
    </View>
  )

}

export default write;