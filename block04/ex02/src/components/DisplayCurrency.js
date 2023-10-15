import React from 'react';

const DisplayCurrency = ({ amount, rate }) => {
  const convertedAmount = amount * rate;
  return <h1>{`Converted amount in USD: $${convertedAmount.toFixed(2)}`}</h1>;
};

export default DisplayCurrency;
