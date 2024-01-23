import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Button, TextField } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { registerUserAction } from '../../Redux/Auth/auth.action';

const validationSchema = Yup.object({
  firstName: Yup.string().required('First Name is required'),
  lastName: Yup.string().required('Last Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

const Signup = () => {
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    gender:'',
  };

  const [gender,setGender]=useState("")


  const onSubmit = (values) => {
    // Handle registration logic here
    values.gender=gender
    console.log('Form data submitted:', values);
    dispatch(registerUserAction({data:values}))
  };
  const dispatch=useDispatch();

  const handleChange = (event) => {

    setGender(event.target.value);

  };

  const navigate=useNavigate();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form className='mt-3 space-y-3'>
        <div className='space-y-3'>

          <Field as={TextField} placeholder='First Name' type="text" id="firstName" variant='outlined' fullWidth name="firstName" />
          <ErrorMessage className='text-red-500' name="firstName" component="div" />
        </div>

        <div >

          <Field as={TextField} placeholder='Last Name' type="text" variant='outlined' fullWidth id="lastName" name="lastName" />
          <ErrorMessage className='text-red-500' name="lastName" component="div" />
        </div>

        <div>

          <Field as={TextField} placeholder='Email' type="email" id="email" variant='outlined' fullWidth name="email" />
          <ErrorMessage className='text-red-500' name="email" component="div" />
        </div>

        <div>

          <Field as={TextField} placeholder='Password' type="password" variant='outlined' fullWidth id="password" name="password" />
          <ErrorMessage className='text-red-500' name="password" component="div" />
        </div>

        <div>
        <RadioGroup
         onChange={handleChange}
        row
        aria-label="gender"
        name="gender"
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
        <ErrorMessage className='text-red-500' name="gender" component="div" />
        
      </RadioGroup>
        </div>

        <div className='mt-4'>
          <Button sx={{ padding: ".6rem 0rem" }} type="submit" fullWidth variant='contained' color='primary'>Register</Button>
          <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
            Already have an account? <a className="text-red-600 hover:underline hover:underline-offset-4 cursor-pointer" onClick={()=>navigate("/login")}>Login</a>
          </div>
        </div>
      </Form>
    </Formik>
  );
};

export default Signup;
