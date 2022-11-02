import React, { useContext } from "react";
import ProductCard from "../../components/product-card/ProductCard";
import { CartContext } from "../../context/cart/CartContext";
import { useProducts } from "../../context/products/ProductsProvider";
import styles from "./Shop.module.css";


const Shop = () => {
  const products = useProducts();

  const {cart, addItem, removeItem} = useContext(CartContext)

  return (
    <div className={styles.container}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          image={product.image}
          alt={product.alt}
          title={product.title}
          descript={product.description}
          price={product.price}
          /* //TODO guardar en el carrito el producto seleccionado */
          /* onClick={() => {
            alert(`Agregaste ${product.title} al carrito`);
          }} */
          addItem={addItem}
          item={cart.filter( cartItem => cartItem.item.id === product.id)}
          removeItem={removeItem}
        />
      ))}
    </div>
  );
};

export default Shop;

/*

*/