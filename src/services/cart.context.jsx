import React, { useState } from "react";

export const CartContext = React.createContext(null);

export const CartContextProvider = ({ children }) => {
  const [item, setItem] = useState([]);
  const [total, setTotal] = useState(0);

  return (
    <CartContext.Provider value={{ item, total, setItem, setTotal }}>
      {children}
    </CartContext.Provider>
  );
};
