// import { Button } from "react-bootstrap";
// import Card from "react-bootstrap/Card";
// import Row from "react-bootstrap/Row";
// import { useRecoilState } from "recoil";
// import { useState } from "react";
// import { cartUpdatedList } from "../atoms/Selectors";
// import AddToCart from "./AddToCart";

// function Grid({ products }) {
//   return (
//     <>
//       {products.map((product) => {

//         return (
//           <Row xs={1} md={2} className="g-4">
//             <Card>
//               <Card.Img variant="top" src="" />
//               <Card.Body>
//                 <Card.Title>
//                   {product.name.charAt(0).toUpperCase() + product.name.slice(1)}
//                 </Card.Title>
//                 <Card.Text>{product.shortDesc}</Card.Text>
//                 <Card.Text>Price Rs.{product.price}</Card.Text>
//                 <Card.Body>
//                   <Button variant="dark">More details</Button>{" "}
//                   {/* <Button onClick={() => addToCart(product)}>AddToCart</Button> */}
//                   {/* <AddToCart productItem={product} /> */}
//                 </Card.Body>
//               </Card.Body>
//             </Card>
//           </Row>
//         );
//       })}
//     </>
//   );
// }

// export default Grid;
