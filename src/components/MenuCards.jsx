import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export const MenuCards = (props) => {
  const { addToCart } = useContext(CartContext);
  return (
    <div className="w-96 flex flex-row ring-2">
      <div className="bg-sky-700 w-full grid place-items-center">
        <img className="w-12" src={props.imgUrl} alt="drink" />
      </div>
      <div className="flex flex-col justify-center items-start gap-y-2">
        <div className="flex flex-row justify-between items-center w-full">
          <h2>{props.name}</h2>
          <h2>{props.price}</h2>
        </div>
        <p className="text-sm w-full">{props.desc}</p>
        <button className="yellowBtn" onClick={() => addToCart(props.id)}>
          Add to Order
        </button>
      </div>
    </div>
  );
};
