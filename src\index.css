import React, { useState } from 'react';
import ChatInterface from './components/ChatInterface';
import { generateResponse } from './utils/anthropic';
import { processWithLangChain } from './utils/langchain';

function App() {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = async (message) => {
    setMessages(prevMessages => [...prevMessages, { type: 'user', content: message }]);
    
    try {
      const aiResponse = await generateResponse(message);
      const langChainResponse = await processWithLangChain(message);
      setMessages(prevMessages => [
        ...prevMessages, 
        { type: 'ai', content: aiResponse },
        { type: 'langchain', content: langChainResponse }
      ]);
    } catch (error) {
      console.error('Error getting response:', error);
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
