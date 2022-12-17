import React, { useState, useRef, useEffect } from "react";
import { CartItems } from "./CartItems";

function Cart() {
  return (
    <div className="w-3/4 sm:w-1/2 md:w-1/4 h-screen bg-dark-coffee p-4 absolute top-[5.2rem] right-0 z-10">
      <div className="w-full h-full bg-pastel-coffee">
        <CartItems />
      </div>
    </div>
  );
}

export default Cart;
