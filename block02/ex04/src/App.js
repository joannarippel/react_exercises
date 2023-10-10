import React from 'react'
import List from './components/List'

function App(){

  const categories =['shirts', 'hats','shoes']
  return(
    <div>
      <h2>Products</h2>
      <List categories={categories} />
    </div>
)
}

export default App;
