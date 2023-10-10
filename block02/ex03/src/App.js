/*

## Exercise 3 / Display categories ( Class )

- Implement a main/list/item pattern to render a list of products categories.

- The idea is that each component is doing one thing only.

  - Main component (App.js) has the data (list of categories)
  - List component is looping through the data and passing one element at a time to the Item component.
  - The Item component is doing only one thing -- renders the element received from the List.

- Create a brand new React application with 'Create React App' by running "create-react-app ex03" in the terminal from 03_react/block02 folder.

- Create 2 class components: List.js, and Item.js.

- In App.js declare an array of categories with this data: ["shirts", "hats", "shoes"] and render List inside a div tag.

- You should pass "categories" array to List through props using key "categories".

- In List, inside a `<ul>`, you should map through the array and for each iteration you should pass each element of the array under key "category" to Item in which you render it.

- In Item.js, you should render an `<li>` with the received category through props.

*/

import React , {Component} from 'react'
import List from './components/List'

class App extends Component {
 
  render() {
    const categories = ["shirts", "hats", "shoes"]
    return (
      <div> 
        <h2>Products</h2>       
        <List categories = {categories}/>
      </div>
    )
  }
}


export default App;

