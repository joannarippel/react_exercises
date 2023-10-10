## Exercise 1 Change and render state ( Class )

- Create a brand new React application with 'Create React App' by running "create-react-app ex01" in the terminal from 03_react/block03 folder.

- Make App.js to be a class component with an input

- Input should receive user data and by using `onChange` event save it to state (which is initialized to "no data provided!" default value).

- The state is displayed (rendered) as an `<h1>` in the page.

- If no text is provided in the input (initially or if user deletes it) page should display a text saying "no data provided!" in the same `<h1>`.

- At the end in App.js we will have one input and one `<h1>` inside a `<div>` and a state.

## Exercise 2 / Change and render state ( function )

- Create a brand new React application with 'Create React App' by running "create-react-app ex02" in the terminal from 03_react/block03 folder.

Refactor the previous exercise, this time using a function component and the `useState` hook. Take a look at `useState` in the "Hooks" block of React part.

## Exercise 3 / Form handling

- Create a brand new React application with 'Create React App' by running "create-react-app ex03" in the terminal from 03_react/block03 folder.

- In a function component App.js we want to have 2 inputs and one button inside a `<div>`. But this time instead of declaring them directly in App.js both inputs and a button should be three separate child function component, all rendered by the parent component App.js.

- Input 1 should collect the user's email and put it to state in App.js.

- Input 2 should collect the user's password and put it to state in App.js.

- When the button is clicked you should alert from App.js the data collected by the two inputs.

> You should use the `onChange` and `onClick` events and a `useState` hook to update state in your function component: https://ideal-chainsaw-1d4a318f.pages.github.io/#/js_cur/_react/Hooks?id=usestate

## ToDo app (of course!)

- Create a brand new React application with 'Create React App' by running "create-react-app todoapp" in the terminal from 03_react/block03 folder.
- It needs to have the following functionality:
  - it needs to have a input field.
  - it needs to have a submit button
  - you need to be able to submit pressing the button but also pressing enter.
  - you need to be able to remove todo clicking on a trashcan icon or something as obvious
  - the delete icon needs to be hidden until hovering on the todo.
  - you need to be able to mark todos as done with a line through or something as obvious.

You need to have this in GitHub from the very beginning and keep it up to date so that we can check your progress from your repo.

Example: http://todoornottodo.surge.sh/

## Extra challenge: UI Calculator

- Create a brand new React application with 'Create React App' by running "create-react-app uicalculator" in the terminal from 03_react/block03 folder.
- This calculator with a graphical interface needs to work with the basic operations (add, subtract, multiply and divide).
- Also add a clear button to clear the display on click.
