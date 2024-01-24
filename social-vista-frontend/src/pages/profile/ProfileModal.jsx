import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import Modal from '@mui/material/Modal';
import { useDispatch } from 'react-redux';
import { Formik, useFormik } from 'formik';
import { Avatar, IconButton, TextField } from '@mui/material';
import { updateProfileAction } from '../../Redux/Auth/auth.action';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  outline: "none",
  overFlow: "scroll-y",
  borderRadius: 3,
};

export default function ProfileModal({ open, handleClose }) {
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    console.log("values", values)
  }
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: ""
    },
    onSubmit: (values) => {
      console.log("values", values)
      dispatch(updateProfileAction(values))
    },
  })

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={formik.handleSubmit}>
            <div className='flex items-center justify-between'>
              <div className='flex items-center space-x-3'>
                <IconButton onClick={handleClose}>
                  <CloseIcon />

                </IconButton>
                <p>Edit Profile</p>

              </div>
              <Button type='submit'>Save</Button>

            </div>
            <div>
            <div className='h-[15rem]'>
              <img className='w-full h-full' src="https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-james-wheeler-414612.jpg&fm=jpg" alt="" />

            </div>
            <div className='pl-5'>
              <Avatar className='transform -translate-y-20' sx={{ width: "8rem", height: "8rem" }} src='https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100226.jpg?t=st=1705995186~exp=1705998786~hmac=9a0d68b55d7d18fb8ac72fdf8d1875d797b0bb7ebe28b1ed8fd8ff6c1aa486fc&w=740' />

            </div>
            </div>
            <div className='space-y-3'>
              <TextField fullWidth
              id='firstName'
              name='firstName'
              label='First Name'
              value={formik.values.firstName}
              onChange={formik.handleChange}
              />
              <TextField
              fullWidth
              id='lastName'
              name='lastName'
              label='Last Name'
              value={formik.values.lastName}
              onChange={formik.handleChange}
              />

            </div>


          </form>
         
        </Box>
      </Modal>
    </div>
  );
}
