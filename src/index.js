import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import Router from './component/Router.js';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
