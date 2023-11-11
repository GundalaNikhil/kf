import React from "react";
import { Button } from "react-bootstrap";
import { useState } from "react";

const AddToCart = ({ addToCart, cartItems, products }) => {
  const toggelButton = (pro) => {};

  return (
    <div>
      {console.log(cartItems)}
      <h2>Cart</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item.name} - Quantity: {item.quantity}
          </li>
        ))}
      </ul>
      <h2>Product List</h2>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            {product.name} -{" "}
            {/* <button onClick={() => addToCart(product)}>Add to Cart</button> */}
            {cartItems.name !== product.name ? (
              <Button variant="secondary" onClick={() => addToCart(product)}>
                Add to Cart
              </Button>
            ) : (
              <>
                <Button
                  onClick={() => {
                    addToCart(product);
                  }}
                >
                  +
                </Button>
                <span>{cartItems.quantity}</span>
                <Button onClick={() => {}}>-</Button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AddToCart;
