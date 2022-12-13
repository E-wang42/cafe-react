import React from "react";
import MenuCards from "../components/MenuCards";
import PagesBanner from "../components/PagesBanner";

function Menu() {
  return (
    <section className="w-full py-[5.4rem] md:py-[5.2rem]">
      <PagesBanner />
      <MenuCards />
    </section>
  );
}

export default Menu;
