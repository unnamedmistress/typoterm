import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const How = () => {
  return (
    <div className="bg-gradient-to-r from-teal-900 to-black min-h-screen flex justify-center items-center">
      <div className="max-w-3xl w-full px-4">
        <h1 className="text-4xl font-bold text-white mb-8">How to Use Typo Terminators</h1>
        <h2 className="text-2xl font-bold text-white mb-4">Frequently Asked Questions</h2>
        <h3 className="text-lg font-bold text-white mb-2">1. How do I generate a cover letter using Typo Terminators?</h3>
        <p className="text-white mb-4">
          To generate a cover letter using Typo Terminators, simply paste your job description and resume into the input box and click "Generate".
          Typo Terminators will use the OpenAI language model to generate a cover letter for you automatically.
        </p>
        <h3 className="text-lg font-bold text-white mb-2">2. How do I fix typos and spelling errors in my essay using Typo Terminators?</h3>
        <p className="text-white mb-4">
          To fix typos and spelling errors in your essay using Typo Terminators, simply paste your essay into the input box and click "Fix Typos".
          Typo Terminators will use the latest AI technology to fix any errors automatically and provide you with tips for improvement.
        </p>
        <h3 className="text-lg font-bold text-white mb-2">3. How do I know this is safe to use?</h3>
        <p className="text-white mb-4">
          The text entered is checked against a moderation policy to ensure that it is appropriate.
          If the text is not appropriate, the message will not be sent and you will be prompted to
          enter a different message.
          The AI is also instructed to not respond to questions about sex, drugs or violence.

        </p>
        <h3 className="text-lg font-bold text-white mb-2">4. What kind of questions can it answer?</h3>
        <p className="text-white mb-4">
          Typo Terminators can answer questions about a wide variety of topics.
          It can answer questions about history, science, math, geography, sports, music,
          movies, TV shows, books, and more. It can also answer questions about the weather,
          the stock market, and the latest news. It can even answer questions about itself.
        </p>
        <h3 className="text-lg font-bold text-white mb-2">5. Is this cheating?</h3>
        <p className="text-white mb-4">
          You should always check your school policy to see if using Typo Terminators is allowed.
          Typo Terminators is not intended to be used as a substitute for studying. It is intended
          to be used as a supplement to studying. You should use it to enhance your learning.
        </p>
      </div>
    </div>
  );
};

export default How;
