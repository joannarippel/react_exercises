import React, { useState, useEffect } from 'react';
import './App.css';
import { v4 as uuidv4 } from 'uuid'; // Import uuidv4 from uuid

const App = () => {
  const [products, setProducts] = useState([])

  const fetchUserData = () => {
    fetch('https://barcelonacodeschool.com/files/reactB1products.json')
      .then(response => response.json())
      .then(data => {
        // Generate UUIDs for each product
        const productsWithUUID = data.products.map(product => ({
          ...product,
          id: uuidv4(),
        }));
        setProducts(productsWithUUID);
      })
  }

  useEffect(() => {
    fetchUserData()
  }, [])

  return (
    <div className="App">
      <header>My Shop</header>
      <main>
      <h1>Products</h1>
      {products.length > 0 && (
        <ul>
          {products.map(product => (
            <li key={product.id}>
              {product.product}
              <img src={product.image} alt={product.product} width="150" />
              <p>Price: $ {product.price}</p>
              {product.onSale && <p>On Sale!</p>}
            </li>
          ))}
        </ul>
      )}
      

      <h1>Best Sellers</h1>
      {products.length > 0 && (
       <ul>
          {products.filter(product => product.bestSeller).map(product => (
            <li key={product.id}>
              {product.product}
              <img src={product.image} alt={product.product} width="150" />
              <p>Price: $ {product.price}</p>
            </li>
          ))}
       </ul> 
      )}
      </main>
      

      <footer>
        All rights reserved
      </footer>
    </div>
  );
}

export default App;
