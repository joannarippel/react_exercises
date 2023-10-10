import React from 'react';
import SingleProduct from './SingleProduct';

const ProductList = ({ products }) => {
  return (
    <ul>
      {products.length > 0 &&
        products.map((product) => (
          <SingleProduct key={product.id} product={product} />
        ))}
    </ul>
  );
};

export default ProductList;
