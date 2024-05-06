import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import UserStories from '../Stories/UserStories';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 466,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  borderRadius: ".6rem",
  outline: "none"
};

export default function ViewStoryModal({ handleClose, open }) {
 
 

 

  

  return (
    <div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
         
         
        <UserStories/>
        </Box>
      </Modal>
    </div>
  );
}
