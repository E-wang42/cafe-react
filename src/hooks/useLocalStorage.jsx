// import { useState, useEffect } from "react";

// export const useLocalStorage = (key, initialValue) => {
//   const [cartItem, setCartItem] = useState(() => {
//     const cartItemValue = window.localStorage.getItem(key);
//     if (cartItemValue !== null) return JSON.parse(cartItemValue);

//     if (typeof initialValue === "function") {
//       return initialValue();
//     } else {
//       return initialValue;
//     }
//   });

//   useEffect(() => {
//     window.localStorage.setItem(key, JSON.stringify(cartItem));
//   }, [key, cartItem]);
//   return [cartItem, setCartItem];
// };
