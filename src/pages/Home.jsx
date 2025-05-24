import React from 'react';
import Header from '../components/Header';
import ChatList from '../components/ChatList';

export default function Home() {
  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      <Header />
      <ChatList />
    </div>
  );
}
