import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Sidebar({ className = '' }) {
  return (
    <div className={`sidebar ${className}`}>
      <h2 style={{ fontWeight: 'bold', marginBottom: '24px' }}>BeyondChats</h2>
      <NavLink to="/" end className={({isActive}) => isActive ? 'navLink active' : 'navLink'}>
        Inbox
      </NavLink>
      <NavLink to="/contacts" className={({isActive}) => isActive ? 'navLink active' : 'navLink'}>
        Contacts
      </NavLink>
      <NavLink to="/settings" className={({isActive}) => isActive ? 'navLink active' : 'navLink'}>
        Settings
      </NavLink>
    </div>
  );
}


