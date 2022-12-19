import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { CartItems } from "./CartItems";
import menuData from "../data/menuData.json";

function Cart() {
  const { drinks } = useContext(CartContext);

  return (
    <div className="w-3/4 sm:w-1/2 md:w-1/4 h-screen bg-dark-coffee p-4 absolute top-[5.2rem] right-0 z-10">
      <div className="w-full h-full bg-pastel-coffee pt-4">
        {menuData.map((item) => {
          if (drinks[item.id] > 0) {
            return <CartItems data={item} {...item} />;
          }
        })}
      </div>
    </div>
  );
}

export default Cart;
