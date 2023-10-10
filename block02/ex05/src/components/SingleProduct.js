import React from 'react';

const SingleProduct = ({ product }) => {
  return (
    <li>
      {product.product}
      <img src={product.image} alt={product.product} width="150" />
      <p>Price: $ {product.price}</p>
      {product.onSale && <p>On Sale!</p>}
    </li>
  );
};

export default SingleProduct;
