import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const MainPage = () => {
    return (
        <>
  <div className="bg-gradient-to-r  from-teal-900 to-black">

  <div className="flex flex-col lg:flex-row items-center justify-evenly py-12 px-4 h-screen">
  <div className="lg:w-1/2 text-white mx-auto">
    <h1 className="text-4xl font-bold mb-4">Welcome to Typo Terminator</h1>
    <p className="text-lg mb-4">A one-stop solution for all your essay formatting needs.</p>
    <a href="/how" className="bg-white text-teal-600 py-2 px-4 rounded-full font-bold uppercase tracking-wide hover:bg-teal-500 hover:text-white transition duration-200 ease-in-out">Learn More</a>

  </div>
  <div className="object-none h-80 w-96 " style={{backgroundImage: "url('/assets/IMG_2662.PNG')", backgroundSize: "cover"}}></div>
  <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-end">
    <a href="/login" className="text-white hover:text-teal-600 font-bold py-2 px-4 mr-4 rounded-full bg-teal-600 hover:bg-gray-300 transition duration-200 ease-in-out">Log In</a>
    <a href="/login" className="text-teal-600 hover:text-white font-bold py-2 px-4 rounded-full bg-white hover:bg-teal-800 transition duration-200 ease-in-out">Sign Up</a>
  </div>
</div>




<div className=" py-12">
  <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-extrabold text-white mb-4">Reviews</h2>
    <div className="flex flex-wrap -mx-4 group">
      <div className="w-full md:w-1/3 px-4 mb-8">
        <div className="bg-zinc-500 opacity-70 rounded-lg shadow-xl group-hover:blur-sm hover:!blur-none p-6">
          <p className="text-lg font-medium mb-4 text-teal-200 hover:text-white">"I recently came across an app called Typo Terminators, which has been incredibly helpful in enhancing the quality of my cover letters.
           As cover letters can be challenging to write, 
           I was looking for a user-friendly tool that could provide me with guidance"</p>
          <p className="text-gray-400 hover:text-gray-300">- Justin BiBer</p>
        </div>
      </div>
      <div className="w-full md:w-1/3 px-4 mb-8">
        <div className="bg-zinc-500 opacity-70 rounded-lg shadow-xl group-hover:blur-sm hover:!blur-none p-6">
          <p className="text-lg font-medium mb-4 text-teal-200 hover:text-white">"I tried out an app named "Typo Terminator" that helps me write an essay for my class.
        I was blown away by how dramatically it helped me. The app was super easy to use and it provided me with all the tools I needed to write a great essay that the final product is error-free"</p>
          <p className="text-gray-400 hover:text-gray-300">- Ferris Bueller</p>
        </div>
      </div>
      <div className="w-full md:w-1/3 px-4 mb-8">
        <div className="bg-zinc-500 opacity-70 rounded-lg shadow-xl group-hover:blur-sm hover:!blur-none p-6">
          <p className="text-lg font-medium mb-4 text-teal-200 hover:text-white">"What impressed me most about Typo Terminators is its ability to identify and correct any spelling or grammar errors,
           which is crucial when submitting a job application. The app's built-in proofreading tool ensures that the final product is error-free and professional-looking. "</p>
          <p className="text-gray-400 hover:text-gray-300">-Mario</p>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
</>
    )
}

export default MainPage;