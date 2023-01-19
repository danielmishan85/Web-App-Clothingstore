import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function UserDetails() {
  const [admin, setAdmin] = useState([]);

  const id = useParams().userId;

  const getUser = () => {
    fetch(`http://localhost:5000/api/users/${id}`)
      .then((res) => (res.ok ? res.json() : { user: '' }))
      .then((data) => {
        setAdmin(data.user);
      });
  };
  useEffect(() => {
    getUser();
  }, []);
  console.log(admin);

  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant='outlined'>
        {' '}
        <React.Fragment>
          <CardContent>
            <Typography variant='h5' component='div'>
              {admin.firstName} {admin.lastName}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color='text.secondary'>
              {admin.email}
            </Typography>
          </CardContent>
        </React.Fragment>
      </Card>
    </Box>
  );
}
