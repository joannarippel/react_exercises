/*
- Create a brand new React application with 'Create React App' by running "create-react-app ex01" in the terminal from 03_react/block02 folder.

- Create two React class components: a parent and a child.

- "App.js" will be the parent and the child will be called "Child.js". They should be in the src folder.

- You should declare a variable "myName" in the parent component and assign your name to it.

- Render the Child component inside a `<div>` tag in App.js and pass the variable you just declared to the Child component through props using the key "name". ( name={myName} )

- The child component should only render "name" from props using keyword `this.props` inside a p element wrapped into a `<div>`.

- The child component needs to return the following message: "Hello 'the name you passed as a prop', I am the child component!"
*/

import React, {Component} from 'react'
import Child from './Child'

class App extends Component {
  render(){
    const myName = 'Ioana'
    return (
      <div>
        < Child name={myName} />
      </div>
    )

  }
}

export default App;
