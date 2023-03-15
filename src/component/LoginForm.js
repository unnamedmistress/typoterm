
import React, { useState } from "react";
function LoginForm(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const url = "/api/login";
    console.log("Sending POST request to:", url);
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
     console.log(response);
      console.log("response.ok : " + response.ok)
      if (response.ok) {
        props.onLogin();
      } else {
        console.log( username + " : " + password)
        throw new Error("HTTP error " + response.status);
      }
    } catch (error) {
      console.error("client side: " + error + " " + error.message);
      alert("Error logging in " + error );
    }
  };

  return (
    // <div>
    //   <h1 style={{ textAlign: "center" }}>Heading</h1>
    //   <p style={{ textAlign: "center" }}>instructions </p>
    //   <form onSubmit={handleSubmit}>
    //     <div classNameName="form-group">
    //       <label htmlFor="username">Username:</label>
    //       <input
    //         type="text"
    //         classNameName="form-control"
    //         id="username"
    //         value={username}
    //         placeholder="user1"
    //         onChange={(e) => setUsername(e.target.value)}
    //       />
    //     </div>
    //     <div classNameName="form-group">
    //       <label htmlFor="password">Password:</label>
    //       <input
    //         type="password"
    //         classNameName="form-control"
    //         id="password"
    //         value={password}
    //         placeholder="password1"
    //         onChange={(e) => setPassword(e.target.value)}
    //       />
    //     </div>
    //     <button type="submit" classNameName="btn btn-primary mr-2">Log in</button>
    //     <button type="button" classNameName="btn btn-secondary" onClick={props.onSignupClick}>
    //       Sign up
    //     </button>
    //   </form>
    // </div>

<>
  <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between bg-black py-12 px-4 h-screen">
  <div className="lg:w-1/2 text-white mx-auto">
    <h1 className="text-4xl font-bold mb-4">Typo Terminator</h1>
    <p className="text-lg mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum euismod mauris vel tellus aliquam, id pharetra enim lobortis.</p>
    <a href="#" className="bg-white text-blue-500 py-2 px-4 rounded-full font-bold uppercase tracking-wide hover:bg-blue-600 hover:text-white transition duration-200 ease-in-out">Learn More</a>
  </div>
  <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-end">
    <a href="#" className="text-white font-bold py-2 px-4 mr-4 rounded-full bg-blue-700 hover:bg-blue-600 transition duration-200 ease-in-out">Log In</a>
    <a href="#" className="text-white font-bold py-2 px-4 rounded-full bg-gray-700 hover:bg-gray-600 transition duration-200 ease-in-out">Sign Up</a>
  </div>
</div>

<div className="bg-black py-12">
  <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-extrabold text-white mb-4">Reviews</h2>
    <div className="flex flex-wrap -mx-4">
      <div className="w-full md:w-1/3 px-4 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-lg font-medium mb-4">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. "</p>
          <p className="text-gray-600">- Dario</p>
        </div>
      </div>
      <div className="w-full md:w-1/3 px-4 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-lg font-medium mb-4">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. "</p>
          <p className="text-gray-600">- Dario</p>
        </div>
      </div>
      <div className="w-full md:w-1/3 px-4 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-lg font-medium mb-4">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. "</p>
          <p className="text-gray-600">-Dario</p>
        </div>
      </div>
    </div>
  </div>
</div>


{/* <footer className="bg-gray-200 py-8">
  <div className="container mx-auto flex flex-wrap">
    <div className="w-full lg:w-1/3 px-4">
      <h3 className="font-bold text-gray-900 mb-4">About Us</h3>
      <p className="text-gray-700">Small paragraph.</p>
    </div>
    <div className="w-full lg:w-1/3 px-4">
      <h3 className="font-bold text-gray-900 mb-4">Social Media</h3>
      <ul className="list-reset">
        <li className="mb-2">
          <a href="#" className="text-gray-700 hover:text-blue-500"><i className=""></i> github</a>
        </li>
      </ul>
    </div>
    <div className="w-full lg:w-1/3 px-4">
      <h3 className="font-bold text-gray-900 mb-4">Contact Us</h3>
      <p className="text-gray-700"><i className="fas fa-phone-square fa-lg"></i> 1-800-123-4567</p>
      <p className="text-gray-700"><i className="fas fa-envelope fa-lg"></i> info@example.com</p>
    </div>
  </div>
</footer> */}

</>

  );
}

export default LoginForm