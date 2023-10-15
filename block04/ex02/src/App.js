import React, { useState, useEffect } from 'react';
import InputCurrency from './components/InputCurrency';
import DisplayCurrency from './components/DisplayCurrency' ;
import './App.css';
import axios from 'axios';

function App() {
  const [amount, setAmount] = useState(1); 
  const [rateEURtoUSD, setRate] = useState(null); 

  useEffect(() => {
    
    //const apiKey = '4niVP2iUUjhKXJLDcxyYAt7mp5DWLqXf';
    // got a warning so I modifed the code examples from the exercise

    const url = 'https://api.apilayer.com/currency_data/live?apikey=4niVP2iUUjhKXJLDcxyYAt7mp5DWLqXf'
    axios
      .get(url)
      .then((res) => {        
        setRate(res.data.quotes.USDEUR);
      })
      .catch((error) => {
        console.error('Error fetching exchange rate:', error);
      });
  }, []);

  const handleAmountChange = (e) => {
    setAmount(parseFloat(e.target.value));
  };

  return (
    <div className="App">
      <InputCurrency onChange={handleAmountChange} />
      {rateEURtoUSD !== null ? (
        <DisplayCurrency amount={amount} rate={rateEURtoUSD} />
      ) : (
        <p>Loading exchange rate...</p>
      )}
    </div>
  );
}

export default App;
