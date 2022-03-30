import React, { useState } from 'react';
import { useFormik } from 'formik';
import { validationSchema } from './validationSchema';

export const useFormikLogic = () => {
  const formik = useFormik({
      initialValues: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        checked: []
      },
      validationSchema: validationSchema,
      onSubmit: (values) => {
        alert(JSON.stringify(values, null, 2));
      },
    });

    return formik;

}
