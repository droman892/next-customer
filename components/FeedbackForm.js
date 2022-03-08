import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Radio from '@mui/material/Radio';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import customerQuestions from '../data/customerQuestions';
// import radioRows from './feedbackForm/RadioRows'; 

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
    .matches(phoneRegExp, 'Phone number is not valid')
    .required('Phone Number Required'),
  email: Yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
});



const createData = (name, option1, option2, option3) => {
  return { name, option1, option2, option3 };
}


const FeedbackForm = () => {

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

  const [selectedValue1, setSelectedValue1] = useState("Satisfied");
  const [selectedValue2, setSelectedValue2] = useState("Satisfied");
  const [selectedValue3, setSelectedValue3] = useState("Satisfied");

  const handleChange1 = (e) => {
    setSelectedValue1(e.target.value);
  };

  const handleChange2 = (e) => {
    setSelectedValue2(e.target.value);
  };

  const handleChange3 = (e) => {
    setSelectedValue3(e.target.value);
  };

  const radioRows = [
    createData(
      "How satisfied are you with your products' delivery time?", 
      <Radio
        checked={selectedValue1 === "Not Satisfied"}
        onChange={handleChange1}
        value="Not Satisfied"
        name="radioQuestion1"
      />,
      <Radio
        checked={selectedValue1 === "Satisfied"}
        onChange={handleChange1}
        value="Satisfied"
        name="radioQuestion1"
      />,
      <Radio
        checked={selectedValue1 === "Very Satisfied"}
        onChange={handleChange1}
        value="Very Satisfied"
        name="radioQuestion1"
      />
    ),
    createData(
      "How pleased are you with your product's quality?", 
      <Radio
        checked={selectedValue2 === "Not Satisfied"}
        onChange={handleChange2}
        value="Not Satisfied"
        name="radioQuestion2"
      />,
      <Radio
        checked={selectedValue2 === "Satisfied"}
        onChange={handleChange2}
        value="Satisfied"
        name="radioQuestion2"
      />,
      <Radio
        checked={selectedValue2 === "Very Satisfied"}
        onChange={handleChange2}
        value="Very Satisfied"
        name="radioQuestion2"
      />
    ),
    createData(
      "How confident do you feel you'll shop with us again?",
      <Radio
        checked={selectedValue3 === "Not Satisfied"}
        onChange={handleChange3}
        value="Not Satisfied"
        name="radioQuestion3"
      />,
      <Radio
        checked={selectedValue3 === "Satisfied"}
        onChange={handleChange3}
        value="Satisfied"
        name="radioQuestion3"
      />,
      <Radio
        checked={selectedValue3 === "Very Satisfied"}
        onChange={handleChange3}
        value="Very Satisfied"
        name="radioQuestion3"
      /> 
    ),
  ];


  return (
    <form onSubmit={formik.handleSubmit}>
        <TextField
          className="mb-4"
          fullWidth
          id="firstName"
          name="firstName"
          label="First Name"
          value={formik.values.firstName}
          onChange={formik.handleChange}
          error={formik.touched.firstName && Boolean(formik.errors.firstName)}
          helperText={formik.touched.firstName && formik.errors.firstName}
        />
        <TextField
          className="mb-4"
          fullWidth
          id="lastName"
          name="lastName"
          label="Last Name"
          value={formik.values.lastName}
          onChange={formik.handleChange}
          error={formik.touched.lastName && Boolean(formik.errors.lastName)}
          helperText={formik.touched.lastName && formik.errors.lastName}
        />
        <TextField
          className="mb-4"
          fullWidth
          id="phone"
          name="phone"
          label="Phone"
          value={formik.values.phone}
          onChange={formik.handleChange}
          error={formik.touched.phone && Boolean(formik.errors.phone)}
          helperText={formik.touched.phone && formik.errors.phone}
        />
        <TextField
          className="mb-4"
          fullWidth
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TableContainer>
          <Table aria-label="Question Table">
            <TableHead>
              <TableRow>
                <TableCell></TableCell>
                <TableCell align="center">Not Satisfied</TableCell>
                <TableCell align="center">Satisfied</TableCell>
                <TableCell align="center">Very Satisfied</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {radioRows.map((row) => (
                <TableRow
                  key={row.name}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="center">{row.option1}</TableCell>
                  <TableCell align="center">{row.option2}</TableCell>
                  <TableCell align="center">{row.option3}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>


        <TextareaAutosize
          minRows={5}
          maxRows={15}
          className="w-full my-8 bg-transparent border-[1px] rounded-[4px]"
          placeholder="Please share your thoughts..."
        />


        

        <Button color="primary" variant="contained" fullWidth type="submit" className="mb-9">
          Submit
        </Button>
      </form>
  );
};

export default FeedbackForm;
