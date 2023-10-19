import React, { useState, useEffect } from 'react';
import Message from './Message'; 

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [resultMessage, setResultMessage] = useState('');
  const [messageContent, setMessageContent] = useState([]);
  const [messageCount, setMessageCount] = useState(0);

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);


  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the user exists
    const users = [
      { email: 'a@a.com', password: 'a' },
      { email: 'b@b.com', password: 'b' },
      { email: 'c@c.com', password: 'c' },
    ];

    const match = users.find((user) => user.email === email && user.password === password);

    if (match) {
      setResultMessage('Match found successfully');
    } else {
      setResultMessage('Match not found');
    }

    // Set the countdown messages
    setMessageCount(4); 
    setMessageContent(['This message will disappear in 3', 'This message will disappear in 2', 'This message will disappear in 1', 'This message will disappear in 0']);
  };

  // Countdown
  useEffect(() => {
    if (messageCount > 0) {
      const timer = setInterval(() => {
        setMessageCount(messageCount - 1);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [messageCount]);

  return (
    <div className="main">
      <form onSubmit={handleSubmit}>
        <div className="child">
          Email
          <input type="email" onChange={handleEmail} />
          
        </div>
        <div className="child">
          Password
          <input name="password" onChange={handlePassword} />
          
        </div>
        <button type="submit">SUBMIT</button>
      </form>

      <h2 style={{ color: resultMessage.includes('not found') ? 'red' : 'green' }}>
        {resultMessage}
      </h2>

      <Message messageCount={messageCount} messageContent={messageContent} />
    </div>
  );
};

export default App;
