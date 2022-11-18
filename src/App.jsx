import { Route, Routes, NavLink } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Menu from "./pages/Menu";
import NotFound from "./pages/404";

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/">HOME</NavLink>
          </li>
          <li>
            <NavLink to="/About">ABOUT</NavLink>
          </li>
          <li>
            <NavLink to="/Menu">MENU</NavLink>
          </li>
          <li>
            <NavLink to="/Contact">CONTACT</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* <div className="App">
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <button class="btn btn-primary">Button</button>
      </div> */}
    </>
  );
}

export default App;
