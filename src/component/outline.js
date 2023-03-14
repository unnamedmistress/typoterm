
import React, { useState } from "react"; 
import { Configuration, OpenAIApi } from "openai"; 
import generateText from "../openai.js"; 

const prompt = "Write Outline"
const response = generateText;

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

// API call 
async function handleSubmit(e) {
  e.preventDefault();
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt:
      "Create an outline for an essay about :",
    temperature: 0.3,
    max_tokens: 150,
    top_p: 1.0,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
  });
  setOutputText(response.choices[0].text);
}

function Outline() {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");

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