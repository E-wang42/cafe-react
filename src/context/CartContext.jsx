import { createContext } from "react";

export const CartContext = createContext({});

export const CartProvider = ({ children }) => {
  return (
    <CartContext.Provider value={"I AM USING CONTEXT MEOW"}>
      {children}
    </CartContext.Provider>
  );
};
