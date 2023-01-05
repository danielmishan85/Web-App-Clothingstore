import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ProductPage from "./ProductPage";

function ProductCard(props) {
  const { product } = props;

  return (
    <ProductPage>
      <Card>
        <CardMedia image={product.img} title={product.product} />
        <CardContent>
          <Typography variant="h5" component="h2">
            {product.product}
          </Typography>
          <Typography variant="body2" component="p">
            ${product.price}
          </Typography>
        </CardContent>
      </Card>
    </ProductPage>
  );
}

export default ProductCard;
