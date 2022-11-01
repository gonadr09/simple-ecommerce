import React, { useContext } from "react";
import ProductCard from "../../components/product-card/ProductCard";
import { CartContext } from "../../context/cart/CartContext";
import { useProducts } from "../../context/products/ProductsProvider";
import styles from "./Shop.module.css";

  // 👍 TODO es necesario importar el contexto y usar el hook useContext, o bien utilizar una estrategia similar para guardar
  // los productos en el estado que va a ser utilizado para mantener el carrito de compras

  // 👍 TODO implementar un boton para borrar el item del carrito

  // 👍 TODO implementar un boton para vaciar el carrito

  // 👍 TODO crear un componente para mostrar la cantidad de items en el carrito

  // 👍 TODO crear un componente, o una vista para mostrar el total de la compra

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