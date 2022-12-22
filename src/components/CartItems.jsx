import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

export const CartItems = (props) => {
  const { drinks, addToCart, removeFromCart, cartInputUpdate } =
    useContext(CartContext);

  return (
    <div className="w-10/12 h-32 bg-light-coffee rounded mb-4 flex flex-row justify-center gap-x-1 mx-auto">
      <div className="grid place-items-center pl-4">
        <img className="w-16" src={props.imgUrl} alt="drink" />
      </div>
      <div className="flex flex-col justify-center gap-y-1 items-center w-full">
        <h2 className="text-white">{props.name}</h2>
        <div className="flex flex-row justify-center items-center gap-x-1">
          <button
            onClick={() => removeFromCart(props.id)}
            className="w-7 h-5 bg-stone-800 hover:bg-stone-700 rounded-md text-white text-xs"
          >
            ➖
          </button>
          <input
            className="w-7 h-4 text-center bg-white outline-none rounded-sm text-black"
            onChange={(e) => {
              cartInputUpdate(Number(e.target.value), props.id);
            }}
            value={drinks[props.id]}
            type="text"
          />
          <button
            onClick={() => addToCart(props.id)}
            className="w-7 h-5 bg-stone-800 hover:bg-stone-700 rounded-md text-white text-xs"
          >
            ➕
          </button>
        </div>
        <p className="text-white">${props.price}</p>
      </div>
    </div>
  );
};
