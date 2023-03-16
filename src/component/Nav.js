import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './LogoutButton.js';
import { LoginButton } from './LogButton.js';

const Nav = ({ isLoggedIn, handleLogout, handleLogin, children }) => {
  return (
<div className="bg-gradient-to-r  from-teal-900 to-black">
    <ul className="flex justify-between items-center py-4 px-6">
    <li className="flex items-center">
  <div className="object-none h-8 w-8 mr-2" style={{backgroundImage: "url('/assets/IMG_2656.PNG')", backgroundSize: "cover"}}></div>
  <NavLink className="text-white hover:text-teal-400 font-bold text-xl uppercase" to="/">
    TTerminator
  </NavLink>
</li>
      <li>
        <ul className="flex justify-between items-center space-x-4">
          <li>
            <NavLink
              className="text-white hover:text-teal-400 font-semibold text-sm uppercase"
              to="/how"
            >
              How It Works
            </NavLink>
          </li>   
          <li>
            <NavLink
              className="text-white hover:text-teal-400 font-semibold text-sm uppercase"
              to="/essay-helper"
            >
              Essay
            </NavLink>
          </li>
          <li>
            <NavLink
              className="text-white hover:text-teal-400 font-semibold text-sm uppercase"
              to="/coverLetter"
            >
              Cover Letter
            </NavLink>
          </li>
          <li>
            <NavLink
              className="text-white hover:text-teal-400 font-semibold text-sm uppercase"
              to="/contact"
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </li>
    </ul>
    </div>
  );
};

export default Nav;
