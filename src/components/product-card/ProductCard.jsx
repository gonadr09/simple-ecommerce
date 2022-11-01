import React from "react";
import styles from "./ProductCard.module.css";

// pueden editar este componente para agregarle mas funcionalidad, estilos, etc.

const ProductCard = ({ id, image, alt, title, descript, price, addItem, item, removeItem }) => {
  
  const quantity = item.length > 0 ? item[0].quantity: 0;

  return (
    <div className={styles.card}>
      <img src={image} alt={alt} />
      <h2>{title}</h2>
      <h4>{descript}</h4>
      <h5>${price}</h5>
      <div>
        <button onClick={() => addItem({id, title, image, alt, descript, price}, quantity+1)}>+</button>
        <p>{quantity}</p>
        <button onClick={() => removeItem(id, quantity-1)}>-</button>
      </div>
    </div>
  );
};

export default ProductCard;
