/*
## Exercise 1 / Display a list of product categories

- Create a brand new React application with 'Create React App' by running "create-react-app ex01" in the terminal from 03_react/block01 folder.

- This app needs to display a list of product categories from an array.

- The categories are 't-shirts', 'hats', 'shorts', 'jackets', 'pants', 'shoes'.

- In order to display them you will need to use Array.map
*/

import React from "react"
import {v4 as uuid} from "uuid"

const App = () => {
  const categories = ["t-shirts", "hats", "shorts", "jackets", "pants", "shoes"]
  let categoriesWithIds = categories.map((ele) =>({id: uuid(), name: ele}))
  
  const rCategories = categoriesWithIds.map((item) =>{
    return <li key={item.id}>{item.name}</li>
  })

  return (
    <div>
      <ul>{rCategories}</ul>
    </div>
  )
  
}

export default App



