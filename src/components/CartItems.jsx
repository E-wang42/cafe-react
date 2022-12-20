import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

export const CartItems = (props) => {
  const { drinks, addToCart, removeFromCart, cartInputUpdate } =
    useContext(CartContext);

  return (
    <div
      key={props.id}
      className="w-10/12 h-32 bg-light-coffee rounded flex flex-row justify-center gap-x-1 mx-auto"
    >
      <div className="flex items-center">
        <img className="w-10 h-10" src={props.imgUrl} alt="drink" />
      </div>
      <div className="flex flex-col justify-center gap-y-1 items-center">
        <h2 className="text-white">{props.name}</h2>
        <p className="text-white">{props.price}</p>
        <div className="flex flex-row justify-center items-center gap-x-1">
          <button
            onClick={() => removeFromCart(props.id)}
            className="w-5 h-5 bg-black rounded-md text-white"
          >
            -
          </button>
          <input
            className="w-7 h-4 text-center bg-white outline-none rounded text-black"
            onChange={(e) => {
              cartInputUpdate(Number(e.target.value), props.id);
            }}
            value={drinks[props.id]}
            type="text"
          />
          <button
            onClick={() => addToCart(props.id)}
            className="w-5 h-5 bg-black rounded-md text-white"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};
