import { createContext, useState, useContext, useEffect } from "react";

import { getCollectionAndDocuments } from "../utils/firebase/firebase.utils";

export const ProductContext = createContext({
  products: {},
});

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState({});

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCollectionAndDocuments();
      setProducts(categoryMap);
    };
    getCategoriesMap();
  }, []);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  return useContext(ProductContext);
};
