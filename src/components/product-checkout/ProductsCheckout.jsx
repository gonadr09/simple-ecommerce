import React from "react";

const ProductCheckout = ({ image, alt, title, price, quantity }) => {
  return (
    <tr>
      <td>
        <img src={image} alt={alt} />
      </td>
      <td>{title}</td>
      <td>$ {price}</td>
      <td>{quantity}</td>
      <td>$ {price * quantity}</td>
    </tr>
  );
};

export default ProductCheckout;
