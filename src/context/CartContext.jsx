import { createContext, useState } from "react";
import menuData from "../data/menuData.json";

export const CartContext = createContext({});

const defaultCartData = () => {
  let cart = {};
  for (let i = 1; i < menuData.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const CartProvider = (props) => {
  const [drinks, setDrinks] = useState(defaultCartData);

  const addToCart = (drinkId) => {
    setDrinks((prevState) => {
      return { ...prevState, [drinkId]: prevState[drinkId] + 1 };
    });
  };

  const removeFromCart = (drinkId) => {
    setDrinks((prevState) => {
      return { ...prevState, [drinkId]: prevState[drinkId] - 1 };
    });
  };

  return (
    <CartContext.Provider value={{ drinks, addToCart, removeFromCart }}>
      {props.children}
    </CartContext.Provider>
  );
};
