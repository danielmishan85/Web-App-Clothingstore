import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal(props) {
  const handleSubmit = () => {

  };

  return (
    <div>
      <Modal
        open={props.open}
        onClose={props.onClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            Name: {props.user.firstName}  {props.user.lastName} 
          </Typography>
          <Typography id='modal-modal-description' sx={{ mt: 2 }}>
            Email:   {props.user.email} 
          </Typography>
          <Box
            component='form'
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin='normal'
              required
              fullWidth
              id='role'
              label='New Role'
              name='role'
              autoComplete='role'
              autoFocus
            />
            <Button
                type='submit'
                fullWidth
                variant='contained'
                sx={{ mt: 3, mb: 2, bgcolor: 'black' }}
                size='small'
            >
              Save
            </Button>
          </Box>
          <Button
            size='small'
            onClick={props.onClose}
            fullWidth
            variant='contained'
            sx={{ mt: 3, mb: 2, bgcolor: 'black' }}
          >
            Cancel
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
