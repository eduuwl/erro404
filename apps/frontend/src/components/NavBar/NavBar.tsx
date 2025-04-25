import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <NavLink to="/" end className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item' }>
        Início
      </NavLink>
      <NavLink to="/mapa" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
        Mapa
      </NavLink>
      <NavLink to="/dashboard" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
        Dashboard
      </NavLink>
    </nav>
  );
};

export default Navbar;
