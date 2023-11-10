import React from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import AddToCart from "./AddToCart";

// import data from "../Products.json";

const Products = ({ data }) => {
  console.log(data);
  return (
    <div>
      {data.map((product) => {
        // console.log(product);
        return (
          <Row xs={1} md={2} className="g-4">
            <Card>
              <Card.Img variant="top" src="" />
              <Card.Body>
                <Card.Title>
                  {product.name.charAt(0).toUpperCase() + product.name.slice(1)}
                </Card.Title>
                <Card.Text>{product.shortDesc}</Card.Text>
                <Card.Text>Price Rs.{product.price}</Card.Text>
                <Card.Body>
                  <Button variant="dark">More details</Button>{" "}
                  <AddToCart key={product.id} productItem={product} />
                </Card.Body>
              </Card.Body>
            </Card>
          </Row>
        );
      })}
    </div>
  );
};

export default Products;
