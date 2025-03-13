import React, { useState } from "react";
import Nav from "./Components/Nav";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Card from "./Components/Card";

const App = () => {
  let products = [
    {
      title: "Fancy Product",
      rating: false,
      sale: false,
      price: "$40.00 - $80.00",
    },
    {
      title: "Special Item",
      rating: true,
      sale: true,
      oldprice: "$20.00",
      price: "$18.00",
    },
    {
      title: "Sale Item",
      rating: false,
      sale: true,
      oldprice: "$50.00",
      price: "$25.00",
    },
    {
      title: "Popular Item",
      rating: true,
      sale: false,
      price: "$40.00",
    },
    {
      title: "Sale Item",
      rating: false,
      sale: true,
      oldprice: "$50.00",
      price: "$25.00",
    },
    {
      title: "Fancy Product",
      rating: false,
      sale: false,
      price: "$120.00 - $280.00",
    },
    {
      title: "Special Item",
      rating: true,
      sale: true,
      oldprice: "$20.00",
      price: "$18.00",
    },
    {
      title: "Popular Item",
      rating: true,
      sale: false,
      price: "$40.00",
    },
  ];
  const [cartItems, setCartItems] = useState([]);
  return (
    <div>
      <Nav cartCount={cartItems.length} />
      <Header />
      <Card
        products={products}
        cartItems={cartItems}
        setCartItems={setCartItems}
      />
      <Footer />
    </div>
  );
};

export default App;
