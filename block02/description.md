## Exercise 1 / Pass some prop from class parent component to class child component

- Create a brand new React application with 'Create React App' by running "create-react-app ex01" in the terminal from 03_react/block02 folder.

- Create two React class components: a parent and a child.

- "App.js" will be the parent and the child will be called "Child.js". They should be in the src folder.

- You should declare a variable "myName" in the parent component and assign your name to it.

- Render the Child component inside a `<div>` tag in App.js and pass the variable you just declared to the Child component through props using the key "name". ( name={myName} )

- The child component should only render "name" from props using keyword `this.props` inside a p element wrapped into a `<div>`.

- The child component needs to return the following message: "Hello 'the name you passed as a prop', I am the child component!"

## Exercise 2 / Display name and surname side by side

- Create a brand new React application with 'Create React App' by running "create-react-app ex02" in the terminal from 03_react/block02 folder.

- In App.js define two arrays of equal length, the first one called "names" will have 5 firstnames and the second one called "surnames" will have 5 lastnames.

- Create 2 children class components ( Name.js and Surname.js ) – one to display the firstnames and one to display the lastnames so that they are rendered side by side with matching order without css.

- Each component should receive one prop ( "name" for firstnames and "surname" for lastnames ) and should ONLY render one span with name or surname form the props inside.

- To do so, loop on the array of firstnames in App.js and from this loop send the first name to your Name.js component and the first lastname to your Surname component. You can access the lastnames by using indexes.

Consider this example of pure JavaScript:

```
let names = ["Clifford", "Russel", "Michael", "Dennis", "Andre"];
let surnames = ["Smith", "Simmons", "Diamond", "Coles", "Benjamin"];
names.map( (name,idx) => ([ name, surnames[idx] ]) )
```

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

## Exercise 4 / Display categories ( function )

- Create a brand new React application with 'Create React App' by running "create-react-app ex04" in the terminal from 03_react/block02 folder.

Refactor the previous exercise, this time using only function components.

## Exercise 5 / Refactor ECommerce clone

- Create a brand new React application with 'Create React App' by running "create-react-app ex05" in the terminal from 03_react/block02 folder.

- Refactor the eCommerce clone you did in the previous block to use props.
- Use the Main/List/Item structure.
- Declare the list of products in App.js and pass it to ProductsList.
- Loop in the ProductsList and for each iteration render the product in SingleProduct.
