import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './LogoutButton.js';
import LoginButton from './LogButton.js';

const Nav = ({ isLoggedIn, handleLogout, handleLogin, children }) => {
  return (
    <ul className="flex justify-between items-center py-4 px-6 bg-white">
      <li>
        <NavLink className="text-gray-800 hover:text-gray-600 font-bold text-xl uppercase" to="/">
          Essay App
        </NavLink>
      </li>
      <li>
        <ul className="flex justify-between items-center space-x-4">
          <li>
            <NavLink
              className="text-gray-800 hover:text-gray-600 font-semibold text-sm uppercase"
              activeClassName="border-b-2 border-gray-800"
              to="/how"
            >
              How It Works
            </NavLink>
          </li>
          <li>
            <NavLink
              className="text-gray-800 hover:text-gray-600 font-semibold text-sm uppercase"
              activeClassName="border-b-2 border-gray-800"
              to="/contact"
            >
              Contact Us
            </NavLink>
          </li>
          <li>
            <NavLink
              className="text-gray-800 hover:text-gray-600 font-semibold text-sm uppercase"
              activeClassName="border-b-2 border-gray-800"
              to="/essay-helper"
            >
              Essay Helper
            </NavLink>
          </li>
          <li>
            <NavLink
              className="text-gray-800 hover:text-gray-600 font-semibold text-sm uppercase"
              activeClassName="border-b-2 border-gray-800"
              to="/topic-outline-generator"
            >
              Topic Outline Generator
            </NavLink>
          </li>
          {isLoggedIn ? (
            <li>
              <LogoutButton isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
            </li>
          ) : (
            <li>
              <LoginButton handleLogin={handleLogin} />
            </li>
          )}
        </ul>
      </li>
    </ul>
  );
};

export default Nav;
