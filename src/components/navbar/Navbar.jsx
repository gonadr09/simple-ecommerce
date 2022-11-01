import React, { useContext } from "react";
import { AuthContext } from "../../auth/AuthContext";
import { CartContext } from "../../context/cart/CartContext";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { TYPES } from "../../reducers/authReducer";

// 👍 TODO implementar el ruteo con la libreria correspondiente

// 👍 TODO crear un componente que muestra el nombre del usuario logueado

// 👍 TODO crear un componente que permita ver cuantos items hay en el carrito

// 👍 TODO! recordar que las librerias deben ser instaladas con npm install

const Navbar = () => {
  const { cart, clear } = useContext(CartContext);
  const { state, dispatch } = useContext(AuthContext);

  const quantityCart = cart.reduce((acc, cur) => acc + cur.quantity, 0);
  const priceCart = cart.reduce(
    (acc, cur) => acc + cur.item.price * cur.quantity,
    0
  );

  const handleLogout = () => {
    //setUserAuth({username: '', token: '', isAuth: false})
    dispatch({ type: TYPES.LOGOUT });
  };

  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <small> Bienvenido, {state.username} 👋</small>
        </li>
      </ul>

      <ul>
        <li>
          <Link to="/">
            <small>Inicio</small>
          </Link>
        </li>
        <li>
          <Link to="/checkout">
            <small>Checkout</small>
          </Link>
        </li>
        <li>
          <button onClick={handleLogout}>
            <small> Salir</small>
          </button>
        </li>
      </ul>

      <ul>
        <li>
          <small>Total: ${priceCart}</small>
        </li>
        <li>
          <div>
            <p>{quantityCart}</p>
            <div>🛒</div>
          </div>
          <div>
            <button onClick={clear}>
              <small>❌</small>
            </button>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
