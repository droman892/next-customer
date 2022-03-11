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
import TextareaAutosize from '@mui/base/TextareaAutosize';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Link from 'next/link'

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



const createData = (name, option1, option2, option3) => {
  return { name, option1, option2, option3 };
}


const FeedbackForm = () => {

  const [selectedValue1, setSelectedValue1] = useState("Satisfied");
  const [selectedValue2, setSelectedValue2] = useState("Satisfied");
  const [selectedValue3, setSelectedValue3] = useState("Satisfied");

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
        name="q1"
        id="q1"
        // className='text-amber-400'
      />,
      <Radio
        checked={selectedValue1 === "Satisfied"}
        onChange={handleChange1}
        value="Satisfied"
        name="q1"
        id="q1"
        // className='text-amber-400'
      />,
      <Radio
        checked={selectedValue1 === "Very Satisfied"}
        onChange={handleChange1}
        value="Very Satisfied"
        name="q1"
        id="q1"
        // className='text-amber-400'
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
    <form autoComplete="off" onSubmit={formik.handleSubmit}>
        <TextField
          className="mb-4"
          fullWidth
          id="firstName"
          name="firstName"
          label="First Name"
          value={formik.values.firstName}
          onChange={formik.handleChange}
          error={formik.touched.firstName && Boolean(formik.errors.firstName)}
          helpertext={formik.touched.firstName && formik.errors.firstName}
          inputProps={{style: {fontSize: 15}}}
          InputLabelProps={{style: {fontSize: 15}}}
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
          helpertext={formik.touched.lastName && formik.errors.lastName}
          inputProps={{style: {fontSize: 15}}}
          InputLabelProps={{style: {fontSize: 15}}}
          sx={{ input: { borderColor: '2px solid red' } }}
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
          helpertext={formik.touched.phone && formik.errors.phone}
          inputProps={{style: {fontSize: 15}}}
          InputLabelProps={{style: {fontSize: 15}}}
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
          helpertext={formik.touched.email && formik.errors.email}
          inputProps={{style: {fontSize: 15}}}
          InputLabelProps={{style: {fontSize: 15}}}
        />
        <TableContainer>
          <Table aria-label="Question Table">
            <TableHead>
              <TableRow>
                <TableCell></TableCell>
                <TableCell align="center" className="px-2 font-normal">Not Satisfied</TableCell>
                <TableCell align="center" className="px-2 font-medium">Satisfied</TableCell>
                <TableCell align="center" className="px-2">Very Satisfied</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {radioRows.map((row) => (
                <TableRow
                  key={row.name}
                >
                  <TableCell component="th" scope="row" className="px-0 text-[15px]">
                    {row.name}
                  </TableCell>
                  <TableCell align="center" className="p-0 text-[15px]">{row.option1}</TableCell>
                  <TableCell align="center" className="p-0 text-[15px]">{row.option2}</TableCell>
                  <TableCell align="center" className="p-0 text-[15px]">{row.option3}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>


        <TextareaAutosize
          name="comments"
          value={formik.values.comments}
          onChange={formik.handleChange}
          error={formik.touched.comments && Boolean(formik.errors.comments)}
          helpertext={formik.touched.comments && formik.errors.comments}
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

        <FormControlLabel
          name="acknowledgement"
          control={<Checkbox />}
          label="Please acknowledge that your responses are privately held."
          labelPlacement="end"
          className="mb-5 text-[15px]"
          value={formik.values.acknowledgement}
          onChange={formik.handleChange}
          error={formik.touched.acknowledgement && Boolean(formik.errors.acknowledgement)}
          helpertext={formik.touched.acknowledgement && formik.errors.acknowledgement}
        />


        
        {/* <Link href="/acknowledgement" passHref> */}
          <Button 
            color="primary" 
            variant="contained" 
            fullWidth 
            type="submit" 
            className="mb-9 font-bold bg-amber-400 hover:bg-amber-500 text-[15px]">
            Submit
          </Button>
        {/* </Link> */}

      </form>
  );
};

export default FeedbackForm;
