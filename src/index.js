import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import AppRouter from './component/Router.js';
import './component/tailwind.css';


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
