import React from "react";
import { useLoaderData } from "react-router-dom";
import Tshirt from "../Tshirt/Tshirt";
import Cart from "../Cart/Cart";
import './Home.css'
const Home = () => {
  const tShirts = useLoaderData();
  console.log(tShirts);
  return (
    <div className="home-container">
      <div className="tshirts-container">
        {tShirts.map((tShirt) => (
          <Tshirt key={tShirt._id} tShirt={tShirt} />
        ))}
      </div>
      <div className="cart-container">
        <Cart />
      </div>
    </div>
  );
};

export default Home;
