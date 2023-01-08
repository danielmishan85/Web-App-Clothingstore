import * as React from "react";
import MyCarousel from "../Carousel/Carousel";
import { Container } from "@mui/system";
import Header from "./Header";
import CategorySection from "../Category/CategorySection";
import Footer from "./Footer";
import Facts from "./Facts";
import HeaderLinks from "./HeaderLinks";

function HomePageContent() {
  return (
    <>
      <Container maxWidth="xxl">
        <Header></Header>
        <HeaderLinks></HeaderLinks>
        <MyCarousel></MyCarousel>
        <CategorySection></CategorySection>
        <Facts></Facts>
        <Footer></Footer>
      </Container>
    </>
  );
}

export default HomePageContent;
