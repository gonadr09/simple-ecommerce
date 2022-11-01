import React, { useState } from "react";
import { useContext } from "react";
import ProductCheckout from "../../components/product-checkout/ProductsCheckout";
import { CartContext } from "../../context/cart/CartContext";
import styles from "./Checkout.module.css";

// 👍 TODO implementar esta vista, en la medida de lo posible crear componentes para reutilizar

// 👍 esta vista debe mostrar el total de los productos en el carrito, asi como la suma, y un boton para finalizar la compra.

// 👍 se debera simular la compra, y mostrar un mensaje de compra exitosa

// 👍 pueden implementarlo como deseen (recuerden que el contexto esta manejando el estado que mantiene los productos en el estado)

const Checkout = () => {
  const { cart, clear } = useContext(CartContext);

  const totalCart = cart.reduce(
    (acc, cur) => acc + cur.item.price * cur.quantity,
    0
  );

  const [sold, setSold] = useState(false);

  const handlePurchase = () => {
    clear();
    setSold(true);
  };

  if (sold) {
    return (
      <div className={styles.checkout}>
        <h2>🙌 MUCHAS GRACIAS POR TU COMPRA 🙌</h2>
      </div>
    );
  } else if (totalCart === 0) {
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
              <td>$ {totalCart}</td>
            </tr>
          </tfoot>
        </table>
        <button onClick={handlePurchase}>Terminar compra 💳</button>
      </div>
    );
  }
};

export default Checkout;
