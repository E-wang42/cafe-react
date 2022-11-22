import React from "react";
import { motion } from "framer-motion";

function Home() {
  return (
    <section className="h-screen">
      <div className="h-full grid place-items-center">
        <motion.div className="w-8 h-8 bg-white"></motion.div>
        <h1 id="heading">Panda Coffee House</h1>
      </div>
    </section>
  );
}

export default Home;
