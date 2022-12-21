import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export const MenuCards = (props) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="w-full flex flex-col sm:flex-row">
      <div className="bg-stone-500 w-full grid place-items-center p-2">
        <img
          className="w-28 object-cover object-center drop-shadow-2xl"
          src={props.imgUrl}
          alt="drink"
        />
      </div>
      <div className="flex flex-col justify-center items-center sm:items-start gap-y-2 bg-light-coffee p-8">
        <div className="flex flex-row justify-between items-center w-full">
          <h2 className="text-white font-roboto text-lg tracking-wide">
            {props.name}
          </h2>
          <h2 className="text-white font-roboto text-lg">${props.price}</h2>
        </div>
        <p className="text-xs w-full text-slate-300">{props.desc}</p>
        <button className="yellowBtn mt-4" onClick={() => addToCart(props.id)}>
          Add to Order
        </button>
      </div>
    </div>
  );
};
