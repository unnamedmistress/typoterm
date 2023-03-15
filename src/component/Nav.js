import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './LogoutButton.js';
import { LoginButton } from './LogButton.js';

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
              to="/how"
            >
              How It Works
            </NavLink>
          </li>
          <li>
            <NavLink
              className="text-gray-800 hover:text-gray-600 font-semibold text-sm uppercase"
              to="/contact"
            >
              Contact Us
            </NavLink>
          </li>
          <li>
            <NavLink
              className="text-gray-800 hover:text-gray-600 font-semibold text-sm uppercase"
              to="/essay-helper"
            >
              Essay Helper
            </NavLink>
          </li>
          <li>
            <NavLink
              className="text-gray-800 hover:text-gray-600 font-semibold text-sm uppercase"
              to="/coverLetter"
            >
              CoverLetter Generator
            </NavLink>
          </li>
          {isLoggedIn ? (
            <NavLink
              className="text-gray-800 hover:text-gray-600 font-semibold text-sm uppercase"
              to="/logout-form"
            >
              logout
            </NavLink>
          ) : (
            <li>
              <NavLink
                className="text-gray-800 hover:text-gray-600 font-semibold text-sm uppercase"
                to="/login-form"
              >
                login
              </NavLink>
            </li>
          )}
        </ul>
      </li>
    </ul>
  );
};

export default Nav;
