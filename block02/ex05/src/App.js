import React, { useState, useEffect } from 'react';

import { v4 as uuidv4 } from 'uuid'; // Import uuidv4 from uuid
import ProductList from './components/ProductList';

const App = () => {
  const [products, setProducts] = useState([]);

  const fetchUserData = () => {
    fetch('https://barcelonacodeschool.com/files/reactB1products.json')
      .then((response) => response.json())
      .then((data) => {
        // Generate UUIDs for each product
        const productsWithUUID = data.products.map((product) => ({
          ...product,
          id: uuidv4(),
        }));
        setProducts(productsWithUUID);
      });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div className="App">
      <header>My Shop</header>
      <main>
        <h1>Products</h1>
        <ProductList products={products} />

        <h1>Best Sellers</h1>
        <ProductList
          products={products.filter((product) => product.bestSeller)}
        />
      </main>

      <footer>All rights reserved</footer>
    </div>
  );
};

export default App;
