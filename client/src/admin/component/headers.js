import React from 'react';
import { Link } from 'react-router-dom';
const Headers = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/admin">Admin</Link></li>
          <li><Link to="/order">Order</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Headers;
