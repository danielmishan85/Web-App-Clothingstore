import * as React from "react";
import Grid from "@mui/material/Grid";
import { Link, useParams } from "react-router-dom";
import CategoryCard from "../components/Category/CategoryCard";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import FilterSection from "../components/Category/FilterSection";
import "../components/Category/Filter.css";

import { Box, Container } from "@mui/system";

function Category(props) {
  const categoryTitle = useParams().title;
  var newItems = [];
  newItems = props.categoryItems.filter(
    (item) => item.category === categoryTitle
  );

  const [products, setProducts] = useState(newItems);
  const [searchPhrase, setSearchPhrase] = useState("");

  const search = (event) => {
    setSearchPhrase(event.target.value);
    const matched = newItems.filter((product) => {
      return `${product.productName} `
        .toLowerCase()
        .includes(event.target.value.toLowerCase());
    });

    setProducts(matched);
  };
  return (
    <div>
      <Box>
        <Grid sx={{ textAlign: "center" }}>
          <input
            style={{
              width: 250,
              marginTop: "8%",
              height: 40,
              textAlign: "center",
              border: "0.2rem solid black",
              fontSize: 15,
            }}
            type="text"
            placeholder="Search"
            value={searchPhrase}
            onChange={search}
          />{" "}
          <Grid>
            <FilterSection products={products} setProducts={setProducts} />
          </Grid>
        </Grid>
        <Grid
          columns={24}
          sx={{
            flexGrow: 2,
            textAlign: "center",
            marginBottom: 5,
            marginTop: "3%",
          }}
          container
        >
          {products.map((item, i) => (
            <Grid
              key={i}
              item
              xs={24}
              md={6}
              justifyContent="center"
              sx={{
                alignContent: "center",
                padding: "20px",
              }}
            >
              {" "}
              <Card
                sx={{
                  bgcolor: "#eaece5",
                  maxWidth: 300,
                }}
              >
                <Link
                  style={{ textDecoration: "none" }}
                  to={`/products/${item.id}`}
                >
                  <CategoryCard sx={{ margin: "auto" }} key={i} item={item} />{" "}
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
export default Category;
