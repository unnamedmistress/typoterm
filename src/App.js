// Import necessary libraries
import React, { useState, useEffect } from "react";
import openai from "./openai.js";
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
import Outline from "./component/outline.js";
import UserAccount from "./component/useraccount.js";
import ResponseForm from "./component/ResponseForm.js";


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
      <Nav />
      <header className="bg-gray-800 text-white py-4 px-6">
        <h1 className="text-4xl font-bold">Welcome to My App</h1>
      </header>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
          <div className="md:col-span-2 bg-white p-4 rounded-md shadow-md">
            {/* Your main content here */}
          </div>
          <div className="md:col-span-1 bg-white p-4 rounded-md shadow-md">
            {/* Sidebar or additional content here */}
          </div>
        </div>
      </div>
    </>
  );
};


export default App;
