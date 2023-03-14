
import React, { useState, useRef, useEffect } from "react";
import generateText from "../openai.js";
const prompt = "Write coverletter ";
const response = generateText;

const Essay = (props) => {
  return (
    <div className="py-10">
      <h1 className="text-5xl font-bold text-center text-gray-900 mb-8">
        Essay Generator
      </h1>
      <p className="text-lg font-semibold text-center text-gray-700 mb-8">
        Follow these instructions to create your Essay.
      </p>
      <br></br><br></br>
     <div className="w-1/2 mx-auto p-4">
     <input className="w-full h-32 bg-gray-100 border border-gray-400 rounded py-2 px-4" type="text" placeholder="Write your Essay here..." />
     <br></br><br></br>
     <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
        Submit
      </button>
     </div>
   </div>
  );
}

export default Essay; 