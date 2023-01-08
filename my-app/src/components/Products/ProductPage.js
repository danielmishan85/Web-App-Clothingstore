import * as React from "react";
import { useParams } from "react-router-dom";

function ProductPage(props) {
  const id = useParams().productId;
  console.log(id);
  console.log(props.products);
  const product = props.products.find((p) => p.id === parseInt(id));

  return (
    <div>
      <img src={product.img} alt={product.product} />
      <h1>{product.product}</h1>
      <h3>${product.price}</h3>
      <p>{product.desc}</p>
    </div>
  );
}

export default ProductPage;
