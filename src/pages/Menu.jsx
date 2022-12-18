import React, { useState, useRef, useEffect, useContext } from "react";
import PagesBanner from "../components/PagesBanner";
import { CartContext } from "../context/CartContext";

function Menu() {
  const contextValue = useContext(CartContext);

  return (
    <section className="w-full py-[5.4rem] md:py-[5.2rem]">
      <PagesBanner
        image="src/assets/menuBanner.png"
        title="Order Online or On The App"
      />
      <div className="w-11/12 md:max-w-[68rem] h-full">
        {/* menu component goes in here */}
      </div>
      <div>{contextValue}</div>
    </section>
  );
}

export default Menu;
