// Import necessary libraries
import React, { useState, useEffect } from "react";
import LoginForm from "./component/LoginForm.js";
import SignupForm from "./component/SignupForm.js";
import { SignupButton } from "./component/SignButton.js";
import AuthButtons from "./component/LogButton.js";
import LogoutButton from "./component/LogoutButton.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./component/Nav.js";
import How from "./component/how.js";
import Contact from "./component/contact.js";
import Essay from "./component/essay.js";
import UserAccount from "./component/useraccount.js";
import ResponseForm from "./component/ResponseForm.js";


// Define the App component
const App = () => {
  // Define states for text input and loading state
  const [text, setText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Define states for user login and sign-up
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showSignupForm, setShowSignupForm] = useState(false);
  const [isFormLoaded, setIsFormLoaded] = useState(false);

  // Check if user is already logged in on component mount
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  // Functions to handle user login, logout and sign-up
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

  // Define state for the loading dots animation
  const [dots, setDots] = useState(0);

  // Use effect to create and clear interval for loading dots animation
  useEffect(() => {
    const intervalId = setInterval(() => {
      setDots((prevDots) => (prevDots + 1) % 4);
    }, 500);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
     
    </>
  );
};


export default App;