import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Products from "./Components/Products";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Home from "./Components/Home";

import data from "./Products.json";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/products" element={<Products data={data} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
