import React, { useState } from 'react';
import Email from './components/Email';
import Password from './components/Password';
import Button from './components/Button';
import './App.css';

function App () {
  const [formState, setFormState] = useState({
    email: '',
    password: '',
  });

const handleSubmit = () =>{
  if (!formState.email && !formState.password) {
    alert('Please provide an email and password.');
  } else if (!formState.email) {
    alert('Please provide an email.');
  } else if(!formState.email.includes('@')  ){
    alert('Please provide a valid email.');
  } else if (!formState.password) {
    alert('Please provide a password.');
  } else {
    alert(`Email: ${formState.email}, Password: ${formState.password}`);
  }
};


return (
  <>
    <form>
      <Email formState={formState} setFormState={setFormState} />
      <Password formState={formState} setFormState={setFormState} />
    </form>
    <Button handleSubmit={handleSubmit} />
    
    </>
  );

}

export default App;
