import React, { useState, useEffect } from "react";
import LoginForm from "./component/LoginForm.js";
import SignupForm from "./component/SignupForm.js";
import AuthButtons from "./component/LogButton.js";
import LogoutButton from "./component/LogoutButton.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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

  const [dots, setDots] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDots((prevDots) => (prevDots + 1) % 4);
    }, 500);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="App">
   
    </div>
  );
};

export default App;
