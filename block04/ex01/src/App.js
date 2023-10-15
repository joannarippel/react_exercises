import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (counter < 25) {
      const timerId = setTimeout(() => {
        setCounter((prevCounter) => prevCounter + 1);
      }, 1000);

      return () => clearTimeout(timerId); // Cleanup the timer on component unmount
    }
  }, [counter]);

  const handleIncrement = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  return (
    <div className="container">
      <div className="button-container">
        <button className={counter % 2 !== 0 ? 'red-button' : 'blue-button'} onClick={handleIncrement}>
          Increment
        </button>
      </div>
      <div className="counter-container">
        {counter % 2 !== 0 && <h2>{counter}</h2>}
      </div>
    </div>
  );
}

export default App;
