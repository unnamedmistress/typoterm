import React, { useState, useRef, useEffect } from "react";
import { Chat } from "@progress/kendo-react-conversational-ui";
import "./App.css";
import openai from './openai.js';
import LoginForm from "./component/LoginForm.js";
import SignupForm from "./component/SignupForm.js";
import { SignupButton } from "./component/SignButton.js";
import AuthButtons from './component/LogButton.js';
import LogoutButton from "./component/LogoutButton.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Nav } from "./component/Nav.js";

const { generateText, moderateText } = openai;


const App = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
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
    <>
    <Navbar bg="light" expand="lg">
    <LinkContainer to="/">
    <Navbar.Brand>My App</Navbar.Brand>
    </LinkContainer>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
    <LinkContainer to="/contact">
    <Nav.Link>Contact</Nav.Link>
    </LinkContainer>
    <LinkContainer to="/home">
    <Nav.Link>Home</Nav.Link>
    </LinkContainer>
    <LinkContainer to="/signup">
    <Nav.Link>Sign Up</Nav.Link>
    </LinkContainer>
    <LinkContainer to="/signin">
    <Nav.Link>Sign In</Nav.Link>
    </LinkContainer>
    <LinkContainer to="/essay-helper">
    <Nav.Link>Essay Helper</Nav.Link>
    </LinkContainer>
    <LinkContainer to="/cover-letter-helper">
    <Nav.Link>Cover Letter Helper</Nav.Link>
    </LinkContainer>
    <LinkContainer to="/topic-outline-generator">
    <Nav.Link>Topic Outline Generator</Nav.Link>
    </LinkContainer>
    </Nav>
    </Navbar.Collapse>
    </Navbar>
    <header>
    <h1>Welcome to My App</h1>
    </header>
    <div className="container-fluid">
    <div className="row">
    <div className="col-md-4">
    <Card>
    <Card.Body>
    <Card.Title>Card 1</Card.Title>
    <Card.Text>Some text for card 1</Card.Text>
    </Card.Body>
    </Card>
    </div>
    <div className="col-md-4">
    <Card>
    <Card.Body>
    <Card.Title>Card 2</Card.Title>
    <Card.Text>Some text for card 2</Card.Text>
    </Card.Body>
    </Card>
    </div>
    <div className="col-md-4">
    <Card>
    <Card.Body>
    <Card.Title>Card 3</Card.Title>
    <Card.Text>Some text for card 3</Card.Text>
    </Card.Body>
    </Card>
    </div>
    </div>
    </div>
    </>
    );
    };
export default App;