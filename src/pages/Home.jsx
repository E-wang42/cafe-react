import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function Home() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <>
      <section id="section2" className="h-screen border-red-700" ref={ref}>
        <h1
          style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
          className="text-6xl font-serif text-dark-coffee"
          id="heading"
        >
          Panda Coffee House
        </h1>
      </section>
    </>
  );
}

export default Home;
