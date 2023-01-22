import React from 'react';
import { useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

export default function UserDetails(props) {
  const id = useParams().userId;

  const user = props.users.find((u) => u.id === id);
  const userOrders = user.ordersList;

  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant='outlined'>
        {' '}
        <React.Fragment>
          <CardContent>
            <Typography variant='h5' component='div'>
              My Orders
            </Typography>
            {userOrders.map((item, i) => (
              <Grid
                key={i}
                item
                xs={24}
                md={6}
                justifyContent='center'
                sx={{ alignContent: 'center', padding: '20px' }}
              >
                {' '}
                <Card
                  sx={{
                    bgcolor: '#eaece5',
                    maxWidth: 300,
                  }}
                >
                  <Typography sx={{ fontSize: 18 }}>
                    Date of purchase: {item.date}
                  </Typography>
                  <Typography sx={{ fontSize: 18 }}>
                    Total Price: ${item.totalPrice}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </CardContent>
        </React.Fragment>
      </Card>
    </Box>
  );
}
