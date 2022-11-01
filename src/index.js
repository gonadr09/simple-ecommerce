import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ProductsProvider from "./context/products/ProductsProvider";
import CartProvider from "./context/cart/CartProvider";
import AuthProvider from "./auth/AuthProvider";

/* 

  CONSIGNA:

    El siguiente proyecto se encuntra incompleto...
    Deberan completar algunas partes del codigo para que el proyecto funcione correctamente, asi como crear nuevos componentes, hooks, contextos, etc. 

    Para que tengan una guía de por donde empezar, sugiero revisar los contextos, dado que muchas de las funcionalidades dependen de ellos.

    👍 CartProvider necesita ser completado, para que el carrito funcione correctamente.

    👍 La pagina Shop necesita algunas implementaciones, pueden crear nuevos componentes, hooks, contextos, etc. para lograrlo.

    👍 El navbar necesita un indicador de cantidad de productos en el carrito, el mismo debe actualizarse en tiempo real, cada vez que un producto se agregue.

    👍 El ruteo debe ser implementado.

    👍 El sistema de login debe ser implementado.

    👍 El sistema de checkout (completar la compra) debe ser implementado.

    👍 Agregar reducer

    Pueden cambiar el diseño a su gusto, agregar funcionaides y utilizar las estrategias que deseen.

    Pueden resolverlo en grupos.

    Exitooooos y paciencia!

    

*/

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CartProvider>
      <ProductsProvider>
        <AuthProvider>
            <App />
        </AuthProvider>
      </ProductsProvider>
    </CartProvider>
  </React.StrictMode>
);
