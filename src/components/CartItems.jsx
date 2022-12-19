import React from "react";

export const CartItems = (props) => {
  return (
    <>
      <div className="w-10/12 h-32 bg-light-coffee rounded flex flex-row justify-center gap-x-2 mx-auto">
        <div className="flex items-center">
          <img className="w-10 h-10" src={props.imgUrl} alt="drink" />
        </div>
        <div className="flex flex-col justify-center gap-y-2 items-center">
          <h2>{props.name}</h2>
          <p>{props.price}</p>
          <div className="flex flex-row justify-center items-center gap-x-1">
            <button className="w-5 h-5 bg-black rounded-md text-white">
              -
            </button>
            <input
              className="w-10 h-4 text-center bg-white outline-none rounded text-black"
              value={42}
              type="text"
            />
            <button className="w-5 h-5 bg-black rounded-md text-white">
              +
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
