import React, { useState } from "react";
import { useContext } from "react";
import ProductCheckout from "../../components/product-checkout/ProductsCheckout";
import { CartContext } from "../../context/cart/CartContext";
import styles from "./Checkout.module.css";


const Checkout = () => {
  const { cart, clear, priceCart } = useContext(CartContext);

  const [purchase, setPurchase] = useState(false);

  const handlePurchase = () => {
    clear();
    setPurchase(true);
  };

  if (purchase) {
    return (
      <div className={styles.checkout}>
        <h2>🙌 MUCHAS GRACIAS POR TU COMPRA 🙌</h2>
      </div>
    );
  } else if (priceCart === 0) {
    return (
      <div className={styles.checkout}>
        <h2>No hay productos en el carrito</h2>
      </div>
    );
  } else {
    return (
      <div className={styles.checkout}>
        <h1>Checkout</h1>
        <table>
          <thead>
            <tr>
              <th>Imagen</th>
              <th>Titulo</th>
              <th>Precio</th>
              <th>Cantidad</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((cartItem) => (
              <ProductCheckout
                key={cartItem.item.id}
                image={cartItem.item.image}
                alt={cartItem.item.alt}
                title={cartItem.item.title}
                price={cartItem.item.price}
                quantity={cartItem.quantity}
              />
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td>TOTAL</td>
              <td>$ {priceCart}</td>
            </tr>
          </tfoot>
        </table>
        <button onClick={handlePurchase}>Terminar compra 💳</button>
      </div>
    );
  }
};

export default Checkout;
