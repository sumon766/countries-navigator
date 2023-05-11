import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <header>
    <div className="navbar">
      <NavLink to="/"><h1>Countries Navigator</h1></NavLink>
    </div>
  </header>
);

export default Navbar;
