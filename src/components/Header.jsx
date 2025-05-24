import React from 'react';

export default function Header({ toggleSidebar }) {
  return (
    <div className="header">
      <button className="mobileToggle" onClick={toggleSidebar}>☰</button>
      <h2>Dashboard</h2>
      <input type="text" placeholder="Search..." />
    </div>
  );
}

