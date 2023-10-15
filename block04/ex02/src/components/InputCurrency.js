import React from 'react';

const InputCurrency = ({ onChange }) => {
  return (
    <input type="number" placeholder="Enter amount in Euros (EUR)" onChange={onChange} />
  );
};

export default InputCurrency;
