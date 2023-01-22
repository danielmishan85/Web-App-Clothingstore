import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { onAuthStateChanged } from 'firebase/auth';

import { auth } from '../../firebase';

export default function UserDetails() {
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

  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant='outlined'>
        {' '}
        <React.Fragment>
          <CardContent>
            <Typography variant='h5' component='div'>
            {userAuth ? <p>{`Hello ${userAuth.email}!`}</p> : <p>null</p>}
            </Typography>
          </CardContent>
        </React.Fragment>
      </Card>
    </Box>
  );
}
