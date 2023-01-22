import React from "react";
import { Link } from "react-router-dom";
import { Container } from "@mui/system";

function BrandsLink(props) {
  return (
    <Container>
      <Link
        style={{
          textDecoration: "none",
          fontSize: 12,
        }}
        to="/brands"
      >
        <h1 style={{ color: "black" }}>Brands</h1>
      </Link>
    </Container>
  );
}

export default BrandsLink;