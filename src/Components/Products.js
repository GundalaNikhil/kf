import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import AddToCart from "./AddToCart";

const Products = ({ data }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const existingProductIndex = cartItems.findIndex(
      (item) => item.id === product.id
    );

    if (existingProductIndex !== -1) {
      const updatedCart = [...cartItems];
      updatedCart[existingProductIndex].quantity += 1;
      setCartItems(updatedCart);
    } else {
      setCartItems([
        ...cartItems,
        {
          name: product.name,
          id: product.id,
          quantity: 1,
        },
      ]);
    }
  };

  return (
    <div>
      {console.log(cartItems)}
      <AddToCart addToCart={addToCart} cartItems={cartItems} products={data} />
    </div>
  );
};

export default Products;
