import * as React from "react";
import MyCarousel from "../Carousel/Carousel";
import { Container } from "@mui/system";
import Header from "./Header";

function HomePageContent() {
  return (
    <>
      <Container maxWidth="xxl">
        <Header></Header>
        <MyCarousel></MyCarousel>
      </Container>
    </>
  );
}

export default HomePageContent;
