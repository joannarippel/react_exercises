import React, { useState } from 'react';
import './App.css';
import Product from './Product'; 

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


function App() {
  const [categoryFilter, setCategoryFilter] = useState('all'); 

  const handleCategory = (e) => {
    setCategoryFilter(e.target.value);
  };

  const filteredProducts = categoryFilter === 'all'
    ? products
    : products.filter(product => product.category === categoryFilter);

  return (
    <div className="App">
      <h1>Product List</h1>
      <form>
        <label htmlFor="Input">Filter by Category: </label>
        <input type="text"  id="Input"
          placeholder="Enter a category "
          value={categoryFilter}
          onChange={handleCategory}
        />
      </form>
      <ul>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, indx) => (
            <Product key={indx} product={product} />
          ))
        ) : (
          <p>No products found for this category.</p>
        )}
      </ul>
    </div>
  );
}

export default App;