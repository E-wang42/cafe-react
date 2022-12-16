import React from "react";
import { CartItems } from "./CartItems";

function Cart() {
  return (
    <div className="w-1/2 md:w-1/4 h-screen bg-dark-coffee p-4 absolute top-[5.2rem] right-0 z-10">
      <div className="w-full h-full mx-auto text-center bg-white">
        <CartItems />
      </div>
    </div>
  );
}

export default Cart;
