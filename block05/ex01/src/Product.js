
import React from 'react';

function ProductItem({ product }) {
  return (
    <li>
      <p>Name:{product.product}</p>
      <p>Category: {product.category}</p>
      <p>Price: ${product.price.toFixed(2)}</p>
    </li>
  );
}

export default ProductItem;
