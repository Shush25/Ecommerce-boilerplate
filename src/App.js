import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./components/header/header.component";

import HomePage from "./pages/homepage/homepage.component";
import LoginPage from "./pages/login/login.component";
import RegisterPage from "./pages/register/register.component";
import CartPage from "./pages/cart/cart.component";

import { ProductsContextProvider } from "./services/fetchproducts.context";
import { UsersContext } from "./services/user.context";
import { CartContextProvider } from "./services/cart.context";

function App() {
  const { currentUser } = useContext(UsersContext);
  return (
    <div>
      <ProductsContextProvider>
        <CartContextProvider>
          <Header />
          <Routes>
            <Route
              path="/"
              element={currentUser ? <HomePage /> : <LoginPage />}
            />
            <Route
              path="/login"
              element={currentUser ? <HomePage /> : <LoginPage />}
            />
            <Route path="/register" element={<RegisterPage />} />
            <Route
              path="/cart"
              element={currentUser ? <CartPage /> : <LoginPage />}
            />
          </Routes>
        </CartContextProvider>
      </ProductsContextProvider>
    </div>
  );
}

export default App;
