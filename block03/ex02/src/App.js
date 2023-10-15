/*
## Exercise 2 / Change and render state ( function )

- Create a brand new React application with 'Create React App' by running 
"create-react-app ex02" in the terminal from 03_react/block03 folder.

Refactor the previous exercise, this time using a function component 
and the `useState` hook. Take a look at `useState` in the "Hooks" block of React part.

*/

import React, { useState } from 'react';

const App = () => {
  const [inputData, setInputData] = useState("no data provided!");

  const handleChange = (e) => {
    const newValue = e.target.value;
    setInputData(newValue);
  };

  return (
    <div>
      <input type="text" onChange={handleChange} />
      <h1>{inputData || "no data provided!"}</h1>
    </div>
  );
}

export default App;