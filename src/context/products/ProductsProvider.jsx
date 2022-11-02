import React, { useContext } from "react";
import cafe from "../../assets/cafe.jpeg";
import libros from "../../assets/libros.jpeg";
import notebook from "../../assets/notebook.jpg";
import silla from "../../assets/silla.jpg";
import { ProductsContext } from "./ProductsContext";


const ProductsProvider = ({ children }) => {
  const products = [
    {
      id: 1,
      title: "Café",
      image: cafe,
      alt: "Café",
      description: "Café de grano, especial para programadores",
      price: 100,
    },
    {
      id: 2,
      title: "Libros",
      image: libros,
      alt: "Libros",
      description: "Libros de programación",
      price: 600,
    },
    {
      id: 3,
      title: "Notebook",
      image: notebook,
      alt: "Notebook",
      description: "Notebook para programadores",
      price: 50000,
    },
    {
      id: 4,
      title: "Silla",
      image: silla,
      alt: "Silla",
      description: "Silla para programadores",
      price: 5000,
    },
  ];

  return (
    <ProductsContext.Provider
      value={{
        products,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;

export const useProducts = () => {
  const { products } = useContext(ProductsContext);
  return products;
};
