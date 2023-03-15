import React, { useState } from "react";
import { generateText, moderateText } from '../openai.js';


const Outline = () => {
  const [inputText, setInputText] = useState("");
  const [generatedText, setGeneratedText] = useState("");
  const promptOutline = "some words outline";

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSubmit = async () => {
    const response = await generateText(promptEssay, inputText);
    setGeneratedText(response);
  };

  return (
    <div className="mx-auto max-w-md p-6">
      <h1 className="text-3xl font-bold mb-4 text-center">Heading</h1>
      <p className="text-lg mb-6 text-center">Instructions</p>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="inputText" className="block mb-2 font-semibold">
            Input Text:
          </label>
          <input
            type="text"
            className="border p-2 w-full"
            id="inputText"
            value={inputText}
            placeholder="Enter text here"
            onChange={(e) => setInputText(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>
      {outputText && (
        <div className="mt-6">
          <h2 className="text-xl font-bold mb-2">Output Text:</h2>
          <p className="text-lg">{outputText}</p>
        </div>
      )}
    </div>
  );
}

export default Outline;
