import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import LoginForm from './LoginForm.js';
import How from './how.js';
import SignupForm from './SignupForm.js';
import Contact from './contact.js';
import Essay from './essay.js';
import Outline from './outline.js';
import Nav from './Nav.js';
import UserAccount from './useraccount.js';
import ResponseForm from './ResponseForm.js';

const AppRouter = () => {
  const history = createBrowserHistory();

  return (
    <BrowserRouter history={history}>
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
    </BrowserRouter>
  );
};

export default AppRouter;
