import React from "react";
import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-teal-900 to-black h-screen pt-24 text-white  mx-auto">
      <div className="container mx-auto">
          
            <h1 className="text-4xl font-bold mb-4">Welcome to Typo Terminator</h1>
            <p className="text-lg mb-4">A one-stop solution for all your essay formatting needs.</p>
            <div className="flex flex-col md:flex-row items-center justify-center mb-8">
              <Link
                to="/how"
                className="bg-white text-teal-600 py-2 px-4 rounded-full font-bold uppercase tracking-wide hover:bg-teal-500 hover:text-white transition duration-200 ease-in-out mb-4 md:mb-0 md:mr-4"
              >
                Learn More
              </Link>
              <Link
                to="/login"
                className="text-white hover:text-teal-600 font-bold py-2 px-4 rounded-full bg-teal-600 hover:bg-gray-300 transition duration-200 ease-in-out mb-4 md:mb-0 md:mr-4"
              >
                Log In
              </Link>
              <Link
                to="/signup"
                className="text-teal-600 hover:text-white font-bold py-2 px-4 rounded-full bg-white hover:bg-teal-800 transition duration-200 ease-in-out"
              >
                Sign Up
              </Link>
              <div className="flex flex-col items-center justify-center h-screen">
            <img
              src="https://github.com/unnamedmistress/typoterm/blob/main/public/assets/IMG_2662.PNG?raw=true"
              alt="Centered"
              className="max-w-full max-h-full h-64 mb-8"
            />
            </div>
            <div className="py-12">
              <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-extrabold text-white mb-4">Reviews</h2>
                <div className="flex flex-wrap -mx-4 group">
                  {/* ... */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;