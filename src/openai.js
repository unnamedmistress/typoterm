import axios from "axios";
import LoginForm from './component/LoginForm.js';
import Essay from './component/essay.js';

const apiKey = process.env.REACT_APP_OPENAI_API_KEY;

const openai = axios.create({
  baseURL: "https://api.openai.com/v1",
  headers: {
    Authorization: `Bearer ${apiKey}`,
    "Content-Type": "application/json",
  },
});

const generateText = async (promptEssay, text, combinedText, inputText) => {
  console.log('generateText:', text);
  try {
    const completion = await openai.post("/chat/completions", {
      model: "gpt-3.5-turbo-0301",
      messages: [{ role: "user", content: promptEssay + inputText + " " + text || combinedText }],
      n: 1,
      stop: null,
      max_tokens: 1000,
      temperature: 0.5,
    });
    console.log(completion.data);
    console.log("line 35" + completion.data.choices[0].message);
    console.log("Line 36 " + completion.data.choices[0].message.content);
    return completion.data.choices[0].message.content;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export { generateText };
