import React, { useState, useEffect } from 'react';

const Message = ({ messageCount, messageContent }) => {
  const [currentMessage, setCurrentMessage] = useState('');
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (messageCount > 0) {
      setCurrentMessage(messageContent[messageContent.length - messageCount]);
    }
  }, [messageCount, messageContent]);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsVisible(false);
    }, 1000);

    return () => {
      clearInterval(timer);
      setIsVisible(true);
    };
  }, [currentMessage]);

  return (
    <div className="message">
      {isVisible && <h3>{currentMessage}</h3>}
    </div>
  );
};

export default Message;
