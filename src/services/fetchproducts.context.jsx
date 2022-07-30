import React, { useEffect, useState } from "react";

export const ProductsContext = React.createContext(null);

export const ProductsContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  /* This function fetches the products and stores them in products array which is then passesd as context */
  const fetchProduct = () => {
    fetch("https://shush-assignment-1.herokuapp.com/products")
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
