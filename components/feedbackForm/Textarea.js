import TextareaAutosize from '@mui/base/TextareaAutosize';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const phoneRegExp = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

const validationSchema = Yup.object({

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

export const TextArea = () => {

    const formik = useFormik({
        initialValues: {
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          q1: '',
          q2: '',
          q3: '',
          comments: '',
          acknowledgement: false
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
          alert(JSON.stringify(values, null, 2));
        },
      });

    return (
        <TextareaAutosize
          name="comments"
          value={formik.values.comments}
          onChange={formik.handleChange}
          error={formik.touched.comments && Boolean(formik.errors.comments)}
          helperText={formik.touched.comments && formik.errors.comments}
          minRows={5}
          maxRows={15}
          className="
            w-full 
            mt-8
            mb-5
            bg-transparent 
            border-[1px] 
            rounded-[4px] 
            placeholder:text-slate-500
            p-2
            text-[15px]
          "
          placeholder="Please share your thoughts..."
        />
    )
}
