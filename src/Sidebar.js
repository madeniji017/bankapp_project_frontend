import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './Sidebar.css';

// ...

export default props => {
  return (
    <Menu>
      <a className="menu-item" href="/">
        Home
      </a>
      <a className="menu-item" href="/salads">
        Find Account
      </a>
      <a className="menu-item" href="/pizzas">
        Update Account
      </a>
      <a className="menu-item" href="/desserts">
        Delete Account
      </a>
    </Menu>
  );
};