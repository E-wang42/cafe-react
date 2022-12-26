import { createContext, useState, useEffect } from "react";
import menuData from "../data/menuData.json";

export const CartContext = createContext(null);

//loops through json data for use as global state;
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

  //persists data from localStorage upon load;
  useEffect(() => {
    const localData = window.localStorage.getItem("my_cart_items");
    if (localData) {
      setDrinks(JSON.parse(localData));
    }
    return;
  }, []);

  //loops state, creates price total if not null;
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

  //adds to previous state and sets data to localStorage;
  const addToCart = (drinkId) => {
    setDrinks((prevState) => {
      let newDrinks = { ...prevState, [drinkId]: prevState[drinkId] + 1 };
      window.localStorage.setItem("my_cart_items", JSON.stringify(newDrinks));
      return newDrinks;
    });
  };

  //minus from previous state and sets data to localStorage;
  const removeFromCart = (drinkId) => {
    setDrinks((prevState) => {
      let newDrinks = { ...prevState, [drinkId]: prevState[drinkId] - 1 };
      window.localStorage.setItem("my_cart_items", JSON.stringify(newDrinks));
      return newDrinks;
    });
  };

  //value from input field is set as previous state, sets data to localStorage;
  const cartInputUpdate = (updatedAmount, drinkId) => {
    setDrinks((prevState) => {
      let newDrinks = { ...prevState, [drinkId]: updatedAmount };
      window.localStorage.setItem("my_cart_items", JSON.stringify(newDrinks));
      return newDrinks;
    });
  };

  //reduce method for cart total;
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
