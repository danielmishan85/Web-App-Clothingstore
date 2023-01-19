import React from 'react';
import { useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function UserDetails(props) {
  const id = useParams().userId;

  const user = props.users.find((u) => u.id === id);

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
        </React.Fragment>
      </Card>
    </Box>
  );
}
