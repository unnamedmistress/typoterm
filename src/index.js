import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import Nav from './component/Nav.js';
import Contact from './component/contact.js';
import Essay from './component/essay.js';
import Outline from './component/outline.js';
import LoginForm from './component/LoginForm.js';
import SignupForm from './component/SignupForm.js';
import UserAccount from './component/useraccount.js';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import how from './component/how.js';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<LoginForm onSignupClick={() => history.push('/signup')} />} />
        <Route path="/how" element={<how />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/essay-helper" element={<Essay />} />
        <Route path="/cover-letter-helper" element={<div>Cover Letter Helper</div>} />
        <Route path="/topic-outline-generator" element={<Outline />} />
        <Route path="/useraccount" element={<UserAccount />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
