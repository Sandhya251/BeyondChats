import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar.jsx';
import Header from './components/Header.jsx';
import ChatList from './components/ChatList.jsx';
import Contacts from './pages/contacts.jsx';
import Settings from './pages/settings.jsx';
import ChatDetail from './pages/ChatDetail';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(prev => !prev);

  return (
    <Router>
      <div className="container" style={{ display: 'flex' }}>
        <Sidebar className={`sidebar ${sidebarOpen ? 'open' : ''}`} />
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <Header toggleSidebar={toggleSidebar} />
          <Routes>
            <Route path="/" element={<ChatList />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/chat/:id" element={<ChatDetail />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
