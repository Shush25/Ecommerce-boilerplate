import React, { useEffect, useState } from "react";

export const ProductsContext = React.createContext(null);

export const ProductsContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const fetchProduct = () => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((result) => {
        setProducts(result);
      });
  };
  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};
