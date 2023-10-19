import React, { useState } from 'react';
import Product from './Product';
import './App.css';

const products = [
  {
    product: "flash t-shirt",
    price: 27.5,
    category: "t-shirts",
    bestSeller: false,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/61ZipyCaAKL._AC_UX385_.jpg",
    onSale: true,
    quantity: 1,
  },
  {
    product: "batman t-shirt",
    price: 22.5,
    category: "t-shirts",
    bestSeller: true,
    image:
      "https://s1.thcdn.com/productimg/1600/1600/11676326-1444552242012324.png",
    onSale: false,
    quantity: 1,
  },
  {
    product: "superman hat",
    price: 13.9,
    category: "hats",
    bestSeller: true,
    image:
      "https://banner2.kisspng.com/20180429/rqe/kisspng-baseball-cap-superman-logo-batman-hat-5ae5ef317f8366.9727520615250184175223.jpg",
    onSale: false,
    quantity: 1,
  },
];

const App = () => {
  const [shoppCart, setCart] = useState(products);

  const handleQuantityChange = (indx, newQuantity) => {
    if (newQuantity < 1) {
      newQuantity = 1;
    }
    const updatedshoppCart = [...shoppCart];
    updatedshoppCart[indx].quantity = newQuantity;
    setCart(updatedshoppCart);
  };

  const calculateTotalCost = () => {
    return shoppCart.reduce((total, product) => total + product.price * product.quantity, 0);
  };

  const totalCost = calculateTotalCost();
  const shippingMessage = totalCost >= 500 ? 'Free Shipping' : 'Shipping will be charged';

  return (
    <div className="main">
      <h1 className="header">Your Shopping Cart</h1>
      <div className="products">
        {shoppCart.map((product, indx) => (
          <Product key={indx} product={product} onQuantityChange={(newQuantity) => handleQuantityChange(indx, newQuantity)} />
        ))}
      </div>
      <div className="cart-summary">
        <div className="subtotal">
          <p>Subtotal: €{totalCost.toFixed(2)}</p>
        </div>
        <div className="shipping" style={{ color: totalCost >= 500 ? 'green' : 'red' }}>
          <p>{shippingMessage}</p>
        </div>
        <div className="total">
          <p>Total: €{totalCost.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );

}

export default App;
