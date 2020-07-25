import React, { useState, useEffect, useRef, } from 'react';

import { useField } from '@unform/core';

import { mask, unMask } from 'remask';

import { TextInput, Text } from 'react-native';
import styles from '../styles';

type InputProps = {
  name: string,
  masks: string[],
  customStyle: {}
}

const MaskedTextInput = ({ name, masks, customStyle, ...props }: InputProps | any) => {

  const [value, setValue] = useState('');

  const inputRef = useRef<any>(null);

  const { fieldName, registerField, defaultValue, error } = useField(name);

  useEffect(() => {
    inputRef.current && (inputRef.current.value = defaultValue)
  }, [defaultValue]);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      // path: 'value',
      clearValue(ref) {
        ref.value = '';
        ref.clear();
      },
      setValue(ref, value) {
        ref.setNativeProps({ text: value });
        inputRef.current.value = value;
      },
      getValue: (ref) => ref.value
    });
  }, [fieldName, registerField]);

  const handleChange = async (newValue: string) => {
    const unMaskedValue = unMask(String(newValue));
    const maskedValue = mask(unMaskedValue, masks);
    setValue(maskedValue);
    inputRef.current.value = unMask(newValue);
  }

  return (
    <>
      {error && <Text style={styles.error}>{error}</Text>}
      <TextInput
        ref={inputRef}
        value={value}
        defaultValue={defaultValue}
        keyboardAppearance="dark"
        style={{ ...styles.input, ...customStyle }}
        onChangeText={handleChange}
        {...props}
      />
    </>
  )

}

export default MaskedTextInput;
