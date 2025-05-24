import React from 'react';
import { Link } from 'react-router-dom';

const chats = [
  { id: '1', user: 'John Doe', message: 'Need help with billing' },
  { id: '2', user: 'Jane Smith', message: 'AI bot not responding' },
  { id: '3', user: 'Alice Cooper', message: 'Feature request' },
];

export default function ChatList() {
  return (
    <div className="chatList">
      <h2 style={{ fontWeight: 'bold', marginBottom: '16px' }}>Recent Conversations</h2>
      {chats.map(chat => (
        <Link key={chat.id} to={`/chat/${chat.id}`} style={{ textDecoration: 'none' }}>
          <div className="chatCard">
            <p style={{ fontWeight: 'bold', color: '#000' }}>{chat.user}</p>
            <p style={{ fontSize: '14px', color: '#555' }}>{chat.message}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
