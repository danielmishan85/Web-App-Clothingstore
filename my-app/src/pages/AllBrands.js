import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

import CategoryCard from '../components/Category/CategoryCard';
import FilterSection from '../components/UI/FilterSection';
import '../components/UI/Filter.css';

function AllBrands(props) {
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const [checked4, setChecked4] = useState(false);
  const [products, setProducts] = useState(props.products);
  const [searchPhrase, setSearchPhrase] = useState('');

  const search = (event) => {
    setSearchPhrase(event.target.value);
    const matched = props.products.filter((product) => {
      return `${product.productName} `
        .toLowerCase()
        .includes(event.target.value.toLowerCase());
    });

    setProducts(matched);
  };

  const handleChange1 = () => {
    if (checked1 === true) {
      setProducts(props.products);
      setChecked1(false);
    } else {
      setChecked2(false);
      setChecked3(false);
      setChecked4(false);
      setChecked1(true);
      const titleP = {
        title: 'ISABEL MARANT',
      };
      fetch('http://localhost:5000/api/products/filter', {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(titleP),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((res) => (res.ok ? res.json() : { products: '' }))
        .then((data) => {
          setProducts(data);
          console.log(data);
        })
        .catch((err) => console.error(err));
    }
  };

  const handleChange2 = () => {
    if (checked2 === true) {
      setProducts(props.products);
      setChecked2(false);
    } else {
      setChecked1(false);
      setChecked3(false);
      setChecked4(false);
      setChecked2(true);
      const titleP = {
        title: 'LEVIS',
      };
      fetch('http://localhost:5000/api/products/filter', {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(titleP),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((res) => (res.ok ? res.json() : { products: '' }))
        .then((data) => {
          setProducts(data);
          console.log(data);
        })
        .catch((err) => console.error(err));
    }
  };
  const handleChange3 = () => {
    if (checked3 === true) {
      setProducts(props.products);
      setChecked3(false);
    } else {
      setChecked1(false);
      setChecked2(false);
      setChecked4(false);
      setChecked3(true);
      const titleP = {
        title: 'BURBERRY',
      };
      fetch('http://localhost:5000/api/products/filter', {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(titleP),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((res) => (res.ok ? res.json() : { products: '' }))
        .then((data) => {
          setProducts(data);
          console.log(data);
        })
        .catch((err) => console.error(err));
    }
  };
  const handleChange4 = () => {
    if (checked4 === true) {
      setProducts(props.products);
      setChecked4(false);
    } else {
      setChecked1(false);
      setChecked2(false);
      setChecked3(false);
      setChecked4(true);
      const titleP = {
        title: 'TOMMY HILFIGER',
      };
      fetch('http://localhost:5000/api/products/filter', {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(titleP),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((res) => (res.ok ? res.json() : { products: '' }))
        .then((data) => {
          setProducts(data);
          console.log(data);
        })
        .catch((err) => console.error(err));
    }
  };

  return (
    <div>
      <Box>
        <Grid sx={{ textAlign: 'left' }}>
          <input
            style={{
              width: 250,
              marginTop: '8%',
              height: 40,
              textAlign: 'center',
              border: '0.2rem solid black',
              fontSize: 15,
              marginLeft: '45%',
            }}
            type='text'
            placeholder='Search'
            value={searchPhrase}
            onChange={search}
          />{' '}
          <Grid >
            <br />
            <FilterSection products={products} setProducts={setProducts}/>
            <br />
            <div>
              {' '}
              <Box sx={{display: 'grid', justifyItems: 'left', marginLeft: '1.5%'}}>
                <FormControlLabel
                  label='ISABEL MARANT'
                  labelPlacement='right'
                  control={
                    <Checkbox checked={checked1} onChange={handleChange1} />
                  }
                />
                <FormControlLabel
                  label='LEVIS'
                  labelPlacement='right'
                  control={
                    <Checkbox checked={checked2} onChange={handleChange2} />
                  }
                />
                <FormControlLabel
                  label='BURBERRY'
                  labelPlacement='right'
                  control={
                    <Checkbox checked={checked3} onChange={handleChange3} />
                  }
                />
                <FormControlLabel
                  label='TOMMY HILFIGER'
                  labelPlacement='right'
                  control={
                    <Checkbox checked={checked4} onChange={handleChange4} />
                  }
                />
              </Box>
            </div>
          </Grid>
        </Grid>
        <Grid
          columns={24}
          sx={{
            flexGrow: 2,
            textAlign: 'center',
            marginBottom: 5,
            marginTop: '3%',
          }}
          container
        >
          {products.map((item, i) => (
            <Grid
              key={i}
              item
              xs={24}
              md={6}
              justifyContent='center'
              sx={{
                alignContent: 'center',
                padding: '20px',
              }}
            >
              {' '}
              <Card
                sx={{
                  bgcolor: '#eaece5',
                  maxWidth: 300,
                }}
              >
                <Link
                  style={{ textDecoration: 'none' }}
                  to={`/products/${item.id}`}
                >
                  <CategoryCard sx={{ margin: 'auto' }} key={i} item={item} />{' '}
                </Link>
                <Typography sx={{ fontSize: 20 }}>
                  {item.productName}
                </Typography>
                <Typography sx={{ fontSize: 18 }}>${item.price}</Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}
export default AllBrands;
