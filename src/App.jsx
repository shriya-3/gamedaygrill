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
import Chat from "./components/Chat";
import Account from "./pages/Account"
import Profile from "./pages/Profile"


function App() {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);

  return (
    <div className="body">
      <HashRouter>
        <QuantityProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/aboutUs" element={<AboutUs />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/reservations" element={<Reservations />} />
            <Route path="/rewards" element={<Rewards />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/account" element={<Account />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
          <Chat/>
          <Footer />
        </QuantityProvider>
      </HashRouter>
    </div>
  );
}

export default App;
