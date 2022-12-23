import React from "react";
import PagesBanner from "../components/PagesBanner";
import menuData from "../data/menuData.json";
import { MenuCards } from "../components/MenuCards";
import { motion, useInView } from "framer-motion";
import PageIntroText from "../components/PageIntroText";

const containerVariants = {
  start: {
    opacity: 0,
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
  },
  middle: {
    opacity: 1,
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
  },
  end: {
    clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
  },
};

function Menu() {
  return (
    <motion.section
      variants={containerVariants}
      initial="start"
      animate="middle"
      exit="end"
      transition={{ duration: 0.75 }}
      className="w-full py-[5.4rem] md:py-[5.2rem]"
    >
      <PagesBanner
        image="src/assets/menuBanner.png"
        title="Always Satisfying"
      />
      <PageIntroText
        heading="made to order"
        message="Order Online or On The App"
      />
      <div className="container w-11/12 md:max-w-[68rem] h-full mx-auto grid place-items-center">
        <div className="flex flex-wrap flex-col justify-center items-center mt-14 gap-y-8 md:grid md:grid-cols-2 md:grid-rows-3 md:gap-6">
          {menuData.map((item) => (
            <div key={item.id}>
              <MenuCards {...item} />
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Menu;
