import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import AnimatedRoutes from "./components/AnimatedRoutes";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <ScrollToTop />
      <Header />
      <AnimatedRoutes />
      <Footer />
    </CartProvider>
  );
}

export default App;
