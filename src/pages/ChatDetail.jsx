import { useParams } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

export default function ChatDetail() {
  const { id } = useParams();
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  // Load from localStorage
  useEffect(() => {
    const stored = localStorage.getItem(`chatMessages-${id}`);
    if (stored) {
      setMessages(JSON.parse(stored));
    } else {
      setMessages([
        { id: 1, sender: 'user', text: 'Hi, I need help with billing.' },
        { id: 2, sender: 'agent', text: 'Sure! Can you share more details?' },
      ]);
    }
  }, [id]);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem(`chatMessages-${id}`, JSON.stringify(messages));
  }, [messages, id]);

  // Scroll to latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    const newMessage = {
      id: messages.length + 1,
      sender: 'user',
      text: trimmed,
    };

    setMessages([...messages, newMessage]);
    setInput('');

    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        {
          id: prev.length + 1,
          sender: 'agent',
          text: 'Thanks for reaching out! We’ll get back to you shortly.',
        },
      ]);
    }, 1000);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="chatWindow">
      {messages.map((msg) => (
        <div
          key={msg.id}
          className={`message ${msg.sender}`}
        >
          {msg.text}
        </div>
      ))}
      <div ref={messagesEndRef} />

      <div className="inputBox">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type your message..."
          rows={1}
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
}




