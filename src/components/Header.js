import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <h1>Learning Log</h1>
      <p><Link to="/">Home</Link> | <Link to="/signin">Sign In</Link></p>
    </>
  );
}

export default Header;
