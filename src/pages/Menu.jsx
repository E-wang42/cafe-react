import React from "react";
import MenuCards from "../components/MenuCards";
import PagesHero from "../components/PagesHero";

function Menu() {
  return (
    <section className="w-full py-[5.4rem] md:py-[5.2rem]">
      <PagesHero />
      <MenuCards />
    </section>
  );
}

export default Menu;
