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
index) => (
            <div key={index} className={`message ${msg.type}`}>
              {msg.content}
            </div>
          ))}
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  )
}

export default App
