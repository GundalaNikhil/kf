import React from "react";
import { Button } from "react-bootstrap";
import { useRecoilState, useRecoilValue } from "recoil";
import { useState } from "react";
import {
  cartUpdatedList,
  getCartCount,
  removeCartList,
} from "../atoms/Selectors";

const AddToCart = ({ productItem }) => {
  console.log("Checking props ", productItem);
  const [newItems, setNewItems] = useRecoilState(cartUpdatedList);
  // const [cartState, setCartState] = useRecoilState(removeCartList);
  const count = useRecoilValue(getCartCount(productItem));
  const [isAddingToCart, setIsAddingToCart] = useState(true);

  const incrementCart = (productItem) => {
    setIsAddingToCart(false);
    setNewItems(productItem);
  };

  const decrementCart = (productItem) => {
    // setCartState(productItem);
    // // const countItem = cartState.find((item) => item.name == productItem.name);
    // console.log(count);
    // if (count == 0) {
    //   setIsAddingToCart(true);
    // }
  };

  return (
    <>
      {/* {console.log(newItems)} */}
      {isAddingToCart ? (
        <Button variant="secondary" onClick={() => incrementCart(productItem)}>
          Add to Cart
        </Button>
      ) : (
        <>
          <Button
            onClick={() => {
              incrementCart(productItem);
            }}
          >
            +
          </Button>
          <span>{count}</span>
          <Button
            onClick={() => {
              decrementCart(productItem);
            }}
          >
            -
          </Button>
        </>
      )}
    </>
  );
};

export default AddToCart;
