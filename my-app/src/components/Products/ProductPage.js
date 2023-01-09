import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Divider } from '@mui/material';
import { useParams } from 'react-router-dom';
import ProductPageIcons from './ProductPageIcon';

const theme = createTheme();

function ProductPage(props) {
  const id = useParams().productId;

  const product = props.products.find((p) => p.id === parseInt(id));

  return (
    <Container maxWidth='xxxl'>
      <Grid
        container
        spacing={5}
        columns={12}
        alignItems='center'
        justify='center'
        mt='-110px'
      >
        <Grid
          item
          xs={12}
          md={6}
          alignItems='center'
          justify='center'
          sx={{ mb: '30%', display: 'flex', flexDirection: 'row' }}
        >
          <ImageList
            sx={{ width: '19%', marginRight: '6%', paddingTop: '15%' }}
          >
            {product.imgList.map((img) => (
              <ImageListItem
                sx={{
                  width: '100%',
                  height: 'auto',
                  margin: '1%',
                  paddingTop: '1%',
                }}
                cols={2}
                rowHeight={0}
                key={img}
              >
                <img src={img} alt={product.title} loading='lazy' />
              </ImageListItem>
            ))}
          </ImageList>
          <ImageListItem
            sx={{ width: '65%', height: 700, margin: '1%', paddingTop: '10%' }}
            cols={2}
            rowHeight={0}
            key={product.img}
          >
            <img
              src={`${product.img}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${product.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={product.title}
              loading='lazy'
            />
          </ImageListItem>
        </Grid>

        <Grid item xs={12} md={6} alignItems='center' justify='center'>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box
              component='form'
              noValidate
              sx={{
                mb: 45,
                display: 'flex',
                flexDirection: 'column',
                mt: 6,
              }}
            >
              <Typography
                component='h1'
                variant='h4'
                color={'black'}
                align='center'
              >
                {product.productName}
              </Typography>
              <Typography
                component='h2'
                variant='h5'
                color={'black'}
                fontWeight='bold'
                align='center'
              >
                ${product.price}
              </Typography>
              <Divider sx={{ my: '30px' }} />
              <Typography
                component='h2'
                variant='h6'
                color={'black'}
                fontWeight='bold'
                align='center'
              >
                Product Description
              </Typography>
              <Typography component='h3' color={'black'} align='center'>
                {product.desc}
              </Typography>

              <Button
                type='submit'
                fullWidth
                variant='contained'
                sx={{
                  mt: 3,
                  mb: 2,
                  bgcolor: 'black',
                  height: '55px',
                  mt: '40px',
                }}
              >
                Add To Cart
              </Button>
              <Divider sx={{ my: '20px' }} />
              <ProductPageIcons></ProductPageIcons>
              <Divider sx={{ my: '20px' }} />
            </Box>
          </ThemeProvider>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ProductPage;
