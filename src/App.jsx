import { useState } from "react";
import "./App.css";
import { Routes, Route, HashRouter } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
import Reservations from "./pages/Reservations";
import Rewards from "./pages/Rewards";
import Checkout from "./pages/Checkout";
import Cards from "./components/Cards";
import AboutUs from "./pages/AboutUs";
import Footer from "./components/Footer";
import { QuantityProvider } from "./components/contexts/Quantity";

function App() {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);

  return (
    <div className="body">
      <HashRouter basename="gamedaygrill">
        <QuantityProvider>
          <Navbar />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/aboutUs" element={<AboutUs />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/reservations" element={<Reservations />} />
            <Route path="/rewards" element={<Rewards />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
          <Footer />
        </QuantityProvider>
      </HashRouter>
    </div>
  );
}

export default App;
