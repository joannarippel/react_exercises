
import React from 'react';

const Product = ({ product, onQuantityChange }) => {
  return (
    <div className="product">
      <img src={product.image} alt={product.product} />
      <div className="product-info">
        <h2>{product.product}</h2>
        <p>Price: €{product.price.toFixed(2)}</p>
      </div>
      <div className="quantity">
        <button className="btn minus" onClick={() => onQuantityChange(product.quantity - 1)}>-</button>
        <span className="quantity-value">{product.quantity}</span>
        <button className="btn plus" onClick={() => onQuantityChange(product.quantity + 1)}>+</button>
      </div>
    </div>
  );
}

export default Product;
