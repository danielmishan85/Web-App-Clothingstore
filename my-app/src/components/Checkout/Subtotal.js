import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { onAuthStateChanged } from 'firebase/auth';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

import { useStateValue } from '../../context/stateProvider';
import { getBasketTotal } from '../../context/reducer';
import { getBasketItemAmount } from '../../context/reducer';
import './Subtotal.css';
import Button from '../UI/Button';
import { auth } from '../../firebase';

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  const [open, setOpen] = useState(false);
  const [userAuth, setUsetAuth] = useState(null);
  const navigate = useNavigate();
  const current = new Date();

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUsetAuth(user);
      } else {
        setUsetAuth(null);
      }
    });

    return () => {
      listen();
    };
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let products = [];
    basket.map((item) => {
      products.push(item.id);
    });
    const totalPrice = `$${getBasketTotal(basket).toFixed(2)}`;
    const date = `${current.getDate()}/${
      current.getMonth() + 1
    }/${current.getFullYear()}`;
    const orderData = {
      products,
      totalPrice,
      date,
      creator: data.get('email'),
    };
    if (userAuth.email === orderData.creator) {
      fetch('http://localhost:5000/api/orders', {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(orderData),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(() => {
          console.log('order was stored in mongoDb: ', orderData)
        })
        .catch((err) => console.error(err));
    } else {
      console.log('email is not correct, please try again.');
    }

    if (
      data.get('firstName') !== '' &&
      data.get('lastName') !== '' &&
      data.get('email') !== '' &&
      basket.length > 0
    ) {
      basket.map((item) => {
        dispatch({
          type: 'REMOVE_FROM_BASKET',
          item: item,
          productName: item.productName,
        });
      });

      setOpen(true);
    }
  };

  const closeModal = () => {
    setOpen(false);
    navigate('/');
  };

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    height: 300,
    bgcolor: 'background.paper',
    border: '3px solid #000',
    boxShadow: 24,
    p: 4,
    fontSize: 'large',
    fontFamily: 'font-family: Tahoma, Geneva,  sans-serif',
  };

  return (
    <div className='subtotal'>
      <p>
        Total Price ({getBasketItemAmount(basket)} items):{' '}
        <strong>$ {getBasketTotal(basket).toFixed(2)}</strong>
      </p>
      <Box component='form' noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              autoComplete='given-name'
              name='firstName'
              required
              fullWidth
              id='firstName'
              label='First Name'
              autoFocus
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              id='lastName'
              label='Last Name'
              name='lastName'
              autoComplete='family-name'
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              id='email'
              label='Email Address'
              name='email'
              autoComplete='email'
            />
          </Grid>
        </Grid>
        {userAuth && (
          <Button
            type='submit'
            fullWidth
            variant='contained'
            sx={{ mt: 3, mb: 2, bgcolor: 'black' }}
          >
            Checkout
          </Button>
        )}
        {!userAuth && <br />}
        {!userAuth && (
          <Grid container justifyContent='flex-start'>
            <Grid item>
              <Link to='/login'>Already have an account? Log in</Link>
            </Grid>
          </Grid>
        )}
      </Box>
      <Modal
        open={open}
        onClose={() => closeModal()}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <Typography id='modal-modal-title' variant='h3' component='h3'>
            <h3>We are working on your order!</h3>
          </Typography>
          <Typography id='modal-modal-title' variant='h4' component='h4'>
            <h4>Thanks 💕</h4>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

export default Subtotal;
