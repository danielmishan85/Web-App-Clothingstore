import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { onAuthStateChanged } from 'firebase/auth';

import UserOrders from './UserOrders';
import { auth } from '../../firebase';

export default function UserDetails(props) {
  const [showOrders, setShowOrders] = useState(false);
  const [userAuth, setUserAuth] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserAuth(user);
      } else {
        setUserAuth(null);
      }
    });
  });

  const showOrdersHandler = () => {
    setShowOrders(true);
  };

  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant='outlined'>
        {' '}
        <React.Fragment>
          <CardContent>
            <Typography variant='h5' component='div'>
              {userAuth ? <p>{`Hello ${userAuth.email}!`}</p> : <p>null</p>}{' '}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size='small' onClick={showOrdersHandler}>
              View My Orders
            </Button>
          </CardActions>
        </React.Fragment>
      </Card>
      <br />
      <br />
      <br />
      {showOrders && <UserOrders users={props.users}></UserOrders>}
    </Box>
  );
}
