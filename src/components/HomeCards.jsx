import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

function HomeCards(props) {
  const viewRef = useRef(null);
  const isInView = useInView(viewRef, { once: true, amount: "some" });

  return (
    <div
      ref={viewRef}
      style={{
        transform: isInView ? "none" : "translateY(80px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) 0.4s",
      }}
      className="p-8 max-w-[32rem] bg-light-coffee flex-col flex gap-y-6 mb-16 md:mb-0"
    >
      <div>
        <img
          className="w-full h-80 object-cover object-center"
          src={props.img}
          alt="homeCard"
        />
      </div>
      <div>
        <h2 className="font-roboto text-2xl uppercase text-white tracking-wider">
          {props.title}
        </h2>
        <p className="text-neutral-300">{props.desc}</p>
      </div>
      <div>
        <a href="#" className="yellowBtn">
          {props.button}
        </a>
      </div>
    </div>
  );
}

export default HomeCards;
