import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import UserOrders from './UserOrders';

export default function UserDetails(props) {
  const [showOrders, setShowOrders] = useState(false);
  const [user, setUser] = useState([]);

  const id = useParams().userId;

  const getUser = () => {
    fetch(`http://localhost:5000/api/users/${id}`)
      .then((res) => (res.ok ? res.json() : { user: '' }))
      .then((data) => {
        setUser(data.user);
      });
  };
  useEffect(() => {
    getUser();
  }, []);

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
              {user.firstName} {user.lastName}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color='text.secondary'>
              {user.email}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size='small' onClick={showOrdersHandler}>View My Orders</Button>
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
