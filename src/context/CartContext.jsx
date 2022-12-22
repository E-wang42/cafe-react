import { createContext, useState, useEffect } from "react";
import menuData from "../data/menuData.json";

export const CartContext = createContext(null);

const defaultCartData = () => {
  let cart = {};
  for (let i = 1; i < menuData.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const CartProvider = (props) => {
  const [drinks, setDrinks] = useState(defaultCartData());
  const drinksArray = Object.values(drinks);

  useEffect(() => {
    const localData = window.localStorage.getItem("my_cart_items");
    const data = localData ? JSON.parse(localData) : [];
    if (data) {
      setDrinks(data);
    }
  }, []);

  // useEffect(() => {
  //   window.localStorage.setItem("my_cart_items", JSON.stringify(drinks));
  // }, [drinks]);

  const cartTotal = () => {
    let total = 0;
    for (const item in drinks) {
      if (drinks[item] > 0) {
        let drinksInfo = menuData.find((drink) => drink.id === Number(item));
        total += drinks[item] * drinksInfo.price;
      }
    }
    return total.toFixed(2);
  };

  const addToCart = (drinkId) => {
    setDrinks((prevState) => {
      return { ...prevState, [drinkId]: prevState[drinkId] + 1 };
    });
    window.localStorage.setItem("my_cart_items", JSON.stringify(drinks));
  };

  const removeFromCart = (drinkId) => {
    setDrinks((prevState) => {
      return { ...prevState, [drinkId]: prevState[drinkId] - 1 };
    });
  };

  const cartInputUpdate = (updatedAmount, drinkId) => {
    setDrinks((prevState) => {
      return { ...prevState, [drinkId]: updatedAmount };
    });
  };

  const cartQuantity = drinksArray.reduce(
    (quantity, item) => quantity + item,
    0
  );

  return (
    <CartContext.Provider
      value={{
        drinks,
        addToCart,
        removeFromCart,
        cartInputUpdate,
        cartTotal,
        cartQuantity,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};
