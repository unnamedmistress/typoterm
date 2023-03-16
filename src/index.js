import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './component/tailwind.css';
import Nav from "./component/Nav.js";
import How from "./component/how.js";
import Contact from "./component/contact.js";
import Essay from "./component/essay.js";
import Cover from "./component/coverletter.js"
import UserAccount from "./component/useraccount.js";
import ResponseForm from "./component/ResponseForm.js";
import LoginForm from "./component/LoginForm.js";
import SignupForm from "./component/SignupForm.js";
import Footer from './component/footer.js';
import MainPage from './component/MainPage.js';

const Root = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSignupClick = () => {
    // Handle the signup click event here
  };

  return (
    <React.StrictMode>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/how" element={<How />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/essay-helper" element={<Essay />} />
          <Route path="/coverLetter" element={<Cover />} />
          <Route path="/useraccount" element={<UserAccount />} />
          <Route path="/response-form" element={<ResponseForm />} />
          <Route
            path="/login"
            element={
              <LoginForm
                setIsLoggedIn={setIsLoggedIn}
                onSignupClick={handleSignupClick}
              />
            }
          />
        </Routes>
        <Footer />
      </Router>
    </React.StrictMode>
  );
};

createRoot(document.getElementById("root")).render(<Root />);
