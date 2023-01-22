import React from "react";

import Subtotal from "../components/Checkout/Subtotal";
import { useStateValue } from "../context/stateProvider";
import CheckoutProduct from "../components/Checkout/CheckoutProduct";
import "./Checkout.css";

const Checkout = function () {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__main">
        <div className="checkout_products">
          <h2 className="checkout__title">Your Shopping Basket</h2>
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              img={item.img}
              amount={item.amount}
              price={item.price}
              desc={item.desc}
              productName={item.productName}
            />
          ))}
        </div>
        <div className="checkout_subtotal">
          <Subtotal />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
