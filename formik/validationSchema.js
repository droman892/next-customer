import * as Yup from 'yup';

const phoneRegExp = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

export const validationSchema = Yup.object({

  firstName: Yup
    .string().max(15, 'Must be 15 characters or less')
    .required('First Name Required'),
  lastName: Yup
    .string().max(15, 'Must be 15 characters or less')
    .required('Last Name Required'),
  phone: Yup
    .string()
    .matches(phoneRegExp, 'Enter a valid Phone Number')
    .required('Phone Number Required'),
  email: Yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  comments: Yup
    .string().max(800, 'Must be 800 characters or less'),
  acknowledgement: Yup
    .boolean()
    .oneOf([true], "Please be sure to acknowledge your data privacy.")
    .required("Required")
});
