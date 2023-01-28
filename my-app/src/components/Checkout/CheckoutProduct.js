import React, { useState } from "react";

import { useStateValue } from "../../context/stateProvider";
import "./CheckoutProduct.css";
import { AiFillDelete } from "react-icons/ai";
import Button from "../UI/Button";

// AiFillDelete

function CheckoutProduct({ title, img, price, amount, id, desc, productName }) {
  const [{ basket }, dispatch] = useStateValue();
  const [test, setTest] = useState(amount)
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      productName: productName,
    });
  };

  const plusOne = () => {
    setTest(test+1)
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        amount: 1,
        productName: productName,
        price: price,
        description: desc,
        image: img,
      },
      productName: productName,
    });
  };

  const minusOne = () => {
    setTest(test-1)
    dispatch({
      type: "MINUS_ONE_FROM_BASKET",
      item: {
        id: id,
        title: title,
        amount: 1,
        price: price,
        description: desc,
        productName: productName,
        image: img,
      },
      productName: productName,
    });
  };

  return (
    <div className="checkoutProduct">
      <img src={img} alt="checkout img" className="checkoutProduct__img" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{productName}</p>
        <p className="checkoutProduct__title2">{title}</p>
        <div className="checkoutProduct__amountDetils">
          <Button
            onClick={minusOne}
            title="-"
            className="checkoutProduct__btn checkoutProduct__btn-plus"
          />
          <p className="checkoutProduct__amount">{test} </p>
          <Button
            onClick={plusOne}
            title="+"
            className="checkoutProduct__btn"
          />
        </div>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{(price * test).toFixed(2)}</strong>
        </p>
        <Button
          className="checkoutProduct__remove"
          onClick={removeFromBasket}
          title="Remove "
        >
          <AiFillDelete />
        </Button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
