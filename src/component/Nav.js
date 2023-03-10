import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './LogoutButton.js';
import LoginButton from './LogButton.js';

const Nav = ({ isLoggedIn, handleLogout, handleLogin, children }) => {
  return (
    <ul className="navbar-nav">
      <li className="nav-item">
        <NavLink className="nav-link" to="/how">
        Link
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/">
          Link
        </NavLink>
      </li>
      {isLoggedIn ? (
        <LogoutButton isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
      ) : (
        <LoginButton handleLogin={handleLogin} />
      )}
    </ul>
  );
};

export default Nav;
