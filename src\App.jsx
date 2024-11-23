import React, { useState } from 'react';
import ChatInterface from './components/ChatInterface';
import { generateResponse } from './utils/anthropic';

function App() {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = async (message) => {
    setMessages(prevMessages => [...prevMessages, { type: 'user', content: message }]);
    
    try {
      const aiResponse = await generateResponse(message);
      setMessages(prevMessages => [...prevMessages, { type: 'ai', content: aiResponse }]);
    } catch (error) {
      console.error('Error getting AI response:', error);
      setMessages(prevMessages => [...prevMessages, { type: 'ai', content: 'Sorry, I encountered an error.' }]);
    }
  };

  return (
    <div className="App">
      <h1>Online Role-Playing Game</h1>
      <ChatInterface messages={messages} onSendMessage={handleSendMessage} />
    </div>
  );
}

export default App;
