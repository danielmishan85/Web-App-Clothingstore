import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

export default function UserDetails(props) {
  const users = props.users;

  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant='outlined'>
        {' '}
        <React.Fragment>
          <CardContent>
            <Typography variant='h5' component='div'>
              All Users
            </Typography>
            <Grid
              columns={24}
              sx={{
                flexGrow: 2,
                textAlign: 'center',
                marginBottom: 5,
              }}
              container
            >
              {users.map((item, i) => (
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
                    variant='outlined'
                    sx={{
                      bgcolor: 'white',
                      maxWidth: 300,
                    }}
                  >
                    <CardContent>
                      <Typography sx={{ fontSize: 18 }}>
                        Full Name: {item.firstName} {item.lastName}
                      </Typography>
                      <Typography sx={{ fontSize: 18 }}>
                        Email: {item.email}
                      </Typography>
                      <Typography sx={{ fontSize: 18 }}>
                        Role: {item.role}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size='small'>Edit</Button>
                      <Button size='small'>Delete</Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </React.Fragment>
      </Card>
    </Box>
  );
}
