import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Button, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const validationSchema = Yup.object({
 
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

const Login = () => {
  const initialValues = {
   
    email: '',
    password: '',
  };

  const onSubmit = (values) => {
    // Handle registration logic here
    console.log('Form data submitted:', values);
  };
  const navigate=useNavigate();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form className='mt-3 space-y-3 '>
        

        <div className='space-y-2'>

          <Field as={TextField} placeholder='Email' type="email" id="email" variant='outlined' fullWidth name="email" />
          <ErrorMessage name="email" component="div" />
        </div>

        <div>

          <Field as={TextField} placeholder='Password' type="password" variant='outlined' fullWidth id="password" name="password" />
          <ErrorMessage name="password" component="div" />
        </div>

        <div className='mt-4'>
          <Button sx={{ padding: ".6rem 0rem" }} type="submit" fullWidth variant='contained' color='primary'>Login</Button>
          <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
            Don't have an account? <a className="text-red-600 hover:underline hover:underline-offset-4 cursor-pointer" onClick={()=>navigate("/register")}>Register</a>
          </div>
        </div>
      </Form>
    </Formik>
  );
};

export default Login;
