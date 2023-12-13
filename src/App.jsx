import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
import Reservations from "./pages/Reservations";
import Rewards from "./pages/Rewards";
import Checkout from "./pages/Checkout";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import { QuantityProvider } from "./components/contexts/Quantity";

function App() {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);

  return (
    <div className="body">
      <BrowserRouter basename="/gamedaygrill">
        <QuantityProvider>
          <Navbar />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/reservations" element={<Reservations />} />
            <Route path="/rewards" element={<Rewards />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
          <Footer />
        </QuantityProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
