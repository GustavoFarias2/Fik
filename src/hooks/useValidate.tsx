import React from 'react';

import * as Yup from 'yup';

import { FormHandles } from '@unform/core';

async function useValidate(schemaShape: {}, data: {}, formRef: React.RefObject<FormHandles>) {
  try {

    const schema = Yup.object().shape(schemaShape);

    await schema.validate(data);

  } catch (err) {

    if (err instanceof Yup.ValidationError) {

      formRef.current?.setErrors({ [err.path]: err.message });
      throw err;

    }
    
  }
}

export default useValidate;
