import * as React from "react";
import MyCarousel from "../Carousel/Carousel";
import { Container } from "@mui/system";
import Header from "./Header";
import CategorySection from "../Category/CategorySection";
import Footer from "./Footer";

function HomePageContent() {
  return (
    <>
      <Container maxWidth="xxl">
        <Header></Header>
        <MyCarousel></MyCarousel>
        <CategorySection></CategorySection>
        <Footer></Footer>
      </Container>
    </>
  );
}

export default HomePageContent;
