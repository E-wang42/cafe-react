import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { CartItems } from "./CartItems";
import menuData from "../data/menuData.json";

function Cart() {
  const { drinks, cartTotal } = useContext(CartContext);
  const priceTotal = cartTotal();

  return (
    <div className="w-3/4 sm:w-1/2 md:w-1/4 h-screen bg-dark-coffee p-4 absolute top-[5.2rem] right-0 z-50">
      <div className="w-full h-full bg-pastel-coffee pt-6">
        {menuData.map((item) => {
          if (drinks[item.id] > 0) {
            return (
              <div key={item.id}>
                <CartItems data={item} {...item} />
              </div>
            );
          }
        })}
        {priceTotal > 0 ? (
          <div className="flex flex-col w-full h-24 mt-4 justify-center items-center text-center mx-auto gap-y-2">
            <h2 className="text-black capitalize font-roboto">
              subtotal: ${priceTotal}
            </h2>
            <button className="text-black yellowBtn uppercase tracking-wider">
              checkout
            </button>
          </div>
        ) : (
          <h2 className="text-black text-center text-2xl font-roboto">
            😢Your Cart is Empty
          </h2>
        )}
      </div>
    </div>
  );
}

export default Cart;
