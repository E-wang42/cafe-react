import React, { useState, useRef } from "react";
import MenuCards from "../components/MenuCards";
import PagesBanner from "../components/PagesBanner";

function Menu() {
  const [modal, setModal] = useState(false);
  const closeModal = useRef(null);

  const format = Intl.NumberFormat();

  return (
    <section className="w-full py-[5.4rem] md:py-[5.2rem]">
      <PagesBanner image="src/assets/menuBanner.png" title="Order Online" />
      <MenuCards />
      <button className="yellowBtn">Modal</button>
      <div className="opacity-0 pointer-events-none fixed w-full h-full top-0 left-0 grid place-items-center">
        <div className="absolute w-full h-full bg-gray-900 opacity-50"></div>
        <div className="bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto"></div>
      </div>
    </section>
  );
}

export default Menu;
