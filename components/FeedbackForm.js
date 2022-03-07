import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import Rating from '@mui/material/Rating';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
import Table from '@mui/material/Table';
import Stack from '@mui/material/Stack';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

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



function createData(name, option1, option2, option3) {
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



  const rows = [
    createData(
      "How satisfied are you with your products' delivery time?", 
      <Radio name="question1" />, 
      <Radio name="question1" />, 
      <Radio name="question1" />
    ),
    createData("How pleased are you with your product's quality?", 1, 2, 3),
    createData("How confident do you feel you'll shop with us again?", 1, 2, 3),
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



        {/* <Stack spacing={2}>
            <span>Hello : </span>
          <Rating
            name="feedback-rating"
            IconContainerComponent={PanoramaFishEyeIcon}
            highlightSelectedOnly
            max={5}
            size='small'
            value={3}
          />
        </Stack> */}


        <TableContainer>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell></TableCell>
                <TableCell align="center">Not Satisfied</TableCell>
                <TableCell align="center">Satisfied</TableCell>
                <TableCell align="center">Very Satisfied</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
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



        

        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </form>
  );
};

export default FeedbackForm;
