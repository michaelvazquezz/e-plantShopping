import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Welcome from "./components/Welcome";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import CartItems from "./components/CartItems";
import { useSelector } from "react-redux";

function AppContent() {
  const [cartOpen, setCartOpen] = useState(false);
  const cart = useSelector(state => state.cart.items);
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/products");
  };

  const handleLogoClick = () => {
    navigate("/");
    setCartOpen(false);
  };

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Welcome onStart={handleStart} />}
        />

        <Route
          path="/products"
          element={
            <>
              <Navbar
                onCartClick={() => setCartOpen(true)}
                onLogoClick={handleLogoClick}
              />

              {/* Total Cart Amount Section */}
              <div style={{ textAlign: "center", marginTop: 20 }}>
                <h2>
                  Total Cart Amount: $
                  {cart.reduce((t, item) =>
                    t + parseFloat(item.cost.substring(1)) * item.quantity, 0
                  ).toFixed(2)}
                </h2>
              </div>

              {!cartOpen && <ProductList />}
              {cartOpen && (
                <CartItems
                  cart={cart}
                  onContinueShopping={() => setCartOpen(false)}
                />
              )}
            </>
          }
        />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}