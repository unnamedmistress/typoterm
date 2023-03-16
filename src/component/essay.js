import React, { useState } from "react";
import { generateText, moderateText } from '../openai.js';


const Essay = () => {
  const [inputText, setInputText] = useState("");
  const [generatedText, setGeneratedText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const promptEssay = "Edit this text, and provide 5 steps to improve Essay";

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    const response = await generateText(promptEssay, inputText);
    setGeneratedText(response);
  };

  return (
    <div className="bg-gradient-to-r from-teal-900 to-black h-screen pt-24">
      <div className="flex">
      <h1 className="text-5xl font-bold text-center text-green-800 hover:text-green-400">
        Essay Generator
      </h1>
      <div className="w-3/4 p-4">
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          rows="10"
          type="text"
          placeholder="Write your Essay here..."
          value={inputText}
          onChange={handleInputChange}
        />
        <br></br><br></br>
        <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-4"
              onClick={handleSubmit}
              disabled={isLoading}
            >
              {isLoading ? "Loading..." : "Essay Helper"}
            </button>
        {generatedText && (
          <div className="mt-8 bg-gray-100 border border-gray-400 rounded py-4 px-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Generated Text:
            </h3>
            <p className="text-lg text-gray-700">{generatedText}</p>
          </div>
        )}
      </div>
      </div>
    </div>
  );
};

export default Essay;