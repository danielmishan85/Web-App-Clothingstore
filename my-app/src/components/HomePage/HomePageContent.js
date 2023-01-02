import * as React from "react";
import MyCarousel from "../Carousel/Carousel";
import { Container } from "@mui/system";

function HomePageContent() {
  return (
    <>
      <Container maxWidth="xxl">
        <MyCarousel></MyCarousel>
      </Container>
    </>
  );
}

export default HomePageContent;
