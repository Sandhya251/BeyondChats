import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import ChatWindow from '../components/ChatWindow';

export default function ChatPage() {
  const { id } = useParams();

  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      <Header />
      <ChatWindow chatId={id} />
    </div>
  );
}
