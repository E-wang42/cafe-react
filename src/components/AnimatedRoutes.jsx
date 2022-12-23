import React from "react";
import Home from "../pages/Home";
import About from "../pages/About";
import Menu from "../pages/Menu";
import Contact from "../pages/Contact";
import NotFound from "../pages/404";
import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence initial={false} mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
