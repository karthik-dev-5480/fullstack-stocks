import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ isLoggedIn }) => {
  return (
    <nav style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>
      {!isLoggedIn && <Link to="/login">Login</Link>}
    </nav>
  );
};

export default Navbar;
