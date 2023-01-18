import React from 'react';
import { Container } from '@mui/system';

import Header from '../components/HomePage/Header';
import BrandsLink from '../components/HomePage/BrandsLink';
import Carousel from '../components/UI/Carousel'
import CategorySection from '../components/Category/CategoriesSection';
import Facts from '../components/HomePage/Facts'
import Footer from '../components/HomePage/Footer'

const Home = () => {
  return (
    <>
      <Container maxWidth='xxl'>
        <Header></Header>
        <BrandsLink></BrandsLink>
        <Carousel></Carousel>
        <CategorySection></CategorySection>
        <Facts></Facts>
        <Footer></Footer>
      </Container>
    </>
  );
};

export default Home;
