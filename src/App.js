import React, { useState, useEffect } from "react";
import LoginForm from "./component/LoginForm.js";
import SignupForm from "./component/SignupForm.js";
import AuthButtons from "./component/LogButton.js";
import LogoutButton from "./component/LogoutButton.js";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Nav from "./component/Nav.js";
import How from "./component/how.js";
import Contact from "./component/contact.js";
import Essay from "./component/essay.js";
import UserAccount from "./component/useraccount.js";
import ResponseForm from "./component/ResponseForm.js";

const App = () => {
  const [text, setText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showSignupForm, setShowSignupForm] = useState(false);
  const [isFormLoaded, setIsFormLoaded] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  const handleSignup = () => {
    setShowSignupForm(true);
  };
  const handleSignupClick = () => {
    setShowSignupForm(true);
  };
  const [dots, setDots] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDots((prevDots) => (prevDots + 1) % 4);
    }, 500);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <Router>
      <Nav isLoggedIn={isLoggedIn} onLogout={handleLogout} />
      <Routes>
        {/* Other routes */}
        <Route
          path="/login"
          element={
            <LoginForm
              setIsLoggedIn={setIsLoggedIn}
              onSignupClick={handleSignupClick}
            />
          }
        />
        {/* Other routes */}
      </Routes>
    </Router>
  );
};

export default App;
