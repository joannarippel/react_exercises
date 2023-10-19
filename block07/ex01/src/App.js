import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';


function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [message, setMessage] = useState('');
  const [messageStyle, setMessageStyle] = useState({ display: 'none' });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setMessageStyle({ display: 'block' });

    if (!email.includes('@') || email.split('@').length !== 2) {
      setMessage('Please, provide a valid email.');
      setMessageStyle({ display: 'block', backgroundColor: 'red' });
    } else if (password !== password2) {
      setMessage('Passwords should match.');
      setMessageStyle({ display: 'block', backgroundColor: 'red' });
    } else if (password.length < 8) {
      setMessage('Password must have at least 8 characters.');
      setMessageStyle({ display: 'block', backgroundColor: 'red' });
    } else {
      setMessage('Successfully registered');
      setMessageStyle({ display: 'block', backgroundColor: 'green' });
    }

    setTimeout(() => {
      setMessageStyle({ display: 'none' });
    }, 2000);
  };

  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Form Validation</title>
        <meta name="description" content="Example of form validation with React.js."
        />
      </Helmet>
      <h1>Register</h1>

      <form onSubmit={handleFormSubmit}>
        <div>
          <label>Email:</label>
          <input type="text" name="email" value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label>Confirm Password:</label>
          <input type="password" name="password2" value={password2}
            onChange={(e) => setPassword2(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <h2 style={messageStyle}>{message}</h2>
    </div>
  );
}

export default App;
