import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useFormik } from 'formik';
import { Avatar, Button, IconButton } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  borderRadius: ".6rem",
  outline: "none"
};

export default function CreatePostModal({ handleClose, open }) {
  const { auth } = useSelector(store => store)
  const formik = useFormik({
    initialValues: {
      caption: "",
      image: "",
      video: ""
    },
    onSubmit: (values) => {
      console.log("formik values", values)

    }
  });
  const [selectImage, setSelectedImage] = React.useState();
  const [selectVideo, setSelectedVideo] = React.useState();
  const [isLoading, setIsLoading] = React.useState(false)

  const handleSelectImage = () => {
    
  }

  const handleSelectVideo = () => { 

  }

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
            <div>
              <div className='flex items-center space-x-4'>
                <Avatar />
                <div>
                  <p className='font-bold'>{auth.user?.firstName + " " + auth.user.lastName}</p>
                  <p className='text-sm'>@{auth.user?.firstName.toLowerCase() + " " + auth.user.lastName.toLowerCase()}</p>
                </div>

              </div>
              <textarea
              className='w-full mt-5 bg-transparent outline-none border rounded-sm p-2' 
              placeholder='write caption....' name="caption" onChange={formik.handleChange} value={formik.values.caption} id="" rows="4"></textarea>
              <div className='flex space-x-5 items-center mt-5'>
                <div>
                  <input type="file" accept='image/*' onChange={handleSelectImage} style={{ display: "none" }} id='image-input' />
                  <label htmlFor="image-input">
                    <IconButton color='primary'>
                      <InsertPhotoIcon />
                    </IconButton>
                  </label>
                  <span>Image</span>
                </div>
                <div>
                  <input type="file" accept='video/*' onChange={handleSelectVideo} style={{ display: "none" }} id='video-input' />
                  <label htmlFor="video-input">
                    <IconButton color='primary'>
                      <VideoCameraBackIcon />
                    </IconButton>
                  </label>
                  <span>Video</span>
                </div>
              </div>
              {selectImage &&
                <div>
                  <img className='h-[10rem]' src={selectImage} alt="" />
                </div>}

              <div className='flex w-full justify-end ' >
                <Button variant="contained" type="submit" sx={{ borderRadius: "1.5rem" }}>Post</Button>
              </div>

            </div>


          </form>
          <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={isLoading}
            onClick={handleClose}
          >
            <CircularProgress color="inherit" />
          </Backdrop>

        </Box>
      </Modal>
    </div>
  );
}
