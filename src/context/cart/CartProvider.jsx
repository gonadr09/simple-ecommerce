import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { CartContext } from "./CartContext";

// 👍 TODO terminar la implementacion del contexto

const CartProvider = ({ children }) => {
  // esto se puede extraer en un custom hook si se desea
  const [cart, setCart] = useState([]);

  // 👍 funcion para agregar item al carrito (no es necesario agregar nada)
  const addItem = (item, quantity) => {
    if (isInCart(item.id)) {
      const newCart = cart.map((cartItem) => {
        if (cartItem.item.id === item.id) {
          return { item, quantity: cartItem.quantity + 1 };
        } else {
          return cartItem;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, { item, quantity }]);
    }
  };

  // 👍 funcion para eliminar item del carrito (falta un detalle por agregar)
  const removeItem = (itemId) => {
    const newCart = cart.filter((cartItem) => cartItem.item.id !== itemId || cartItem.quantity > 1);
    const newCart2 = newCart.map((cartItem) => {
      if (cartItem.item.id === itemId) {
        return {item: cartItem.item, quantity: cartItem.quantity - 1}
      } else {
        return cartItem
      }
    })
    setCart(newCart2)
  };

  // 👍 funcion para vaciar el carrito (funcion sin implementar)
  const clear = () => {
    setCart([])
  };

  // 👍 funcion para verificar si un item ya esta en el carrito (no es necesario agregar nada)
  const isInCart = (itemId) => {
    return cart.some((cartItem) => cartItem.item.id === itemId);
  };

  // 👍 faltan detalles por agregar
  return <CartContext.Provider value={{cart, addItem, removeItem, clear}}>{children}</CartContext.Provider>;
};

export default CartProvider;
