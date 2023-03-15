
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
    <div className="py-10">
      <h1 className="text-5xl font-bold text-center text-gray-900 mb-8">Topic Generator</h1>
      <p className="text-lg font-semibold text-center text-gray-700 mb-8">Follow these instructions to create your Essay.</p>
      <br></br><br></br>
      <form onSubmit={handleSubmit}>
        <div className="w-1/2 mx-auto p-4">
          <input
            type="text"
            className="w-full h-32 bg-gray-100 border border-gray-400 rounded py-2 px-4"
            id="inputText"
            value={inputText}
            placeholder="Write your Essay here.."
            onChange={(e) => setInputText(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>
      {outputText && (
        <div className="mt-5">
          <h2 className="text-xl font-bold mb-4">Output Text:</h2>
          <p className="text-lg">{outputText}</p>
        </div>
      )}
    </div>
  );
}

export default Outline;