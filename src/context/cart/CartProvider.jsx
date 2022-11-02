import React, { useState } from "react";
import { CartContext } from "./CartContext";

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

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

  const removeItem = (itemId) => {
    const newCart = cart.filter(
      (cartItem) => cartItem.item.id !== itemId || cartItem.quantity > 1
    );
    const newCart2 = newCart.map((cartItem) => {
      if (cartItem.item.id === itemId) {
        return { item: cartItem.item, quantity: cartItem.quantity - 1 };
      } else {
        return cartItem;
      }
    });
    setCart(newCart2);
  };

  const clear = () => {
    setCart([]);
  };

  const isInCart = (itemId) => {
    return cart.some((cartItem) => cartItem.item.id === itemId);
  };

  const quantityCart = cart.reduce((acc, cur) => acc + cur.quantity, 0);
  const priceCart = cart.reduce((acc, cur) => acc + cur.item.price * cur.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clear, quantityCart, priceCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

