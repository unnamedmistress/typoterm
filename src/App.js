// Import necessary libraries
// Import necessary libraries
import React, { useState, useRef, useEffect } from "react";
import openai from './openai.js';
import LoginForm from "./component/LoginForm.js";
import SignupForm from "./component/SignupForm.js";
import { SignupButton } from "./component/SignButton.js";
import AuthButtons from './component/LogButton.js';
import LogoutButton from "./component/LogoutButton.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./component/Nav.js";
import User from "./data/User.js";
import seedData from './data/seed.js';
import How from "./component/How.js";
import Contact from "./component/Contact.js";
import Essay from "./component/Essay.js";
import Outline from "./component/Outline.js";
import UserAccount from "./component/UserAccount.js";
import ResponseForm from "./component/ResponseForm.js";

async function seedDatabase() {
  await seedData();
}

seedDatabase();

// Destructure the functions from the openai.js file
const { generateText, moderateText } = openai;

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
      <Nav
        isLoggedIn={isLoggedIn}
        handleLogout={handleLogout}
        handleLogin={handleLogin}
      />
      <header>
        <h1>Welcome to My App</h1>
      </header>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4"></div>
        </div>
      </div>
    </>
  );
};

export default App;
