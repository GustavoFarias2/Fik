import React, { useEffect, useRef } from 'react';

import { useField } from '@unform/core';

import { TextInput as Input, Text } from 'react-native';
import styles from './styles';

type TextInputProps = {
  name: string,
  customStyle?: {},
  props?: any,
}

const TextInput: React.FC<any | TextInputProps> = ({ name, customStyle, ...props }) => {

  const inputRef = useRef<any>(null);

  const {
    fieldName,
    registerField,
    defaultValue,
    error,
    clearError
  } = useField(name);

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

  return (
    <>
      {error && <Text style={styles.error}>{error}</Text>}
      <Input
        ref={inputRef}
        defaultValue={defaultValue}
        keyboardAppearance="dark"
        style={{ ...styles.input, ...customStyle }}
        onChangeText={(v) => inputRef.current.value = v}
        onFocus={clearError}
        {...props}
      />
    </>
  )

}

export default TextInput;
