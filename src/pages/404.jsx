import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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

function NotFound() {
  return (
    <motion.section
      variants={containerVariants}
      initial="start"
      animate="middle"
      exit="end"
      transition={{ duration: 0.75 }}
      className="h-screen w-full flex flex-col justify-center items-center bg-coffee-pastel"
    >
      <h1 className="text-9xl font-extrabold text-white tracking-widest">
        404
      </h1>
      <div className="bg-[#FF6A3D] px-2 text-sm rounded rotate-12 absolute">
        Page Not Found
      </div>
      <button className="mt-5">
        <a className="relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none focus:ring">
          <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] group-hover:translate-y-0 group-hover:translate-x-0"></span>
          <Link to="/">
            <span className="relative block px-8 py-3 bg-[#1A2238] border border-current">
              Go Home
            </span>
          </Link>
        </a>
      </button>
    </motion.section>
  );
}

export default NotFound;
