import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './component/tailwind.css';

import Nav from "./component/Nav.js";
import How from "./component/how.js";
import Contact from "./component/contact.js";
import Essay from "./component/essay.js";
import Outline from "./component/outline.js";
import UserAccount from "./component/useraccount.js";
import ResponseForm from "./component/ResponseForm.js";
import LoginForm from "./component/LoginForm.js";
import SignupForm from "./component/SignupForm.js";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<LoginForm onSignupClick={() => history.push('/signup')} />} />
        <Route path="/how" element={<How />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/essay-helper" element={<Essay />} />
        <Route path="/topic-outline-generator" element={<Outline />} />
        <Route path="/useraccount" element={<UserAccount />} />
        <Route path="/response-form" element={<ResponseForm />} />
      </Routes>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
