import React, { useState, useEffect } from "react";
import { generateText } from "../openai.js";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import CoverLetterView from './CoverLetterView.js';
import ApiResponseList from "./ApiResponseList.js"; // Import the ApiResponseList component

const prompt = "Write a cover letter ";
const Cover = (props) => {
  const [resumeText, setResumeText] = useState("");
  const [jobDescriptionText, setJobDescriptionText] = useState("");
  const [generatedText, setGeneratedText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState(null);
  const [savedCoverLetters, setSavedCoverLetters] = useState([]); // Add state for saved cover letters
  const { userId } = props;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/user/${userId}`);
        setUserData(response.data);
        setSavedCoverLetters(response.data.userResponses || []); // Set saved cover letters
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchData();
  }, [userId]);

  const handleSubmit = async () => {
    setIsLoading(true);
    const combinedText = `Resume: ${resumeText}\n\nJob Description: ${jobDescriptionText}`;
    const response = await generateText(prompt, combinedText);
    setGeneratedText(response);
    setIsLoading(false);
  };

  const handleSaveResponse = async () => {
    // Save the generated cover letter using an API call
    try {
      const createdAt = new Date(); // Add the current date and time
      await axios.post(`/api/user/${userId}/responses`, {
        cover: generatedText,
        createdAt: createdAt.toISOString(), // Save the date as an ISO string
      });
      console.log('Cover letter saved successfully');
      setSavedCoverLetters([...savedCoverLetters, { cover: generatedText, createdAt }]);
    } catch (error) {
      console.error('Error saving cover letter:', error);
    }
  };

  const handleDeleteResponse = (index) => {
    const newSavedCoverLetters = savedCoverLetters.filter((_, i) => i !== index);
    setSavedCoverLetters(newSavedCoverLetters);
  };
  const handleViewResponse = (index) => {
    const coverLetter = savedCoverLetters[index];
    navigate(`/cover-letter/${index}`, { state: { coverLetter } });
  };

  const renderLinks = () => {
    if (!userData || !userData.savedLinks) {
      return null;
    }
    return userData.savedLinks.map((item, index) => (
      <div key={index} className="mb-2">
        <a href={item.link} className="text-blue-600 hover:text-blue-800">
          {item.title}
        </a>
      </div>
    ));
  };

  return (
    <div className="pb-80 pt-24 bg-zinc-900">
      <div className="flex">
        <div className="w-1/4 bg-zinc-800 p-4">
          <h2 className="text-2xl text-green-700 hover:text-green-400 font-bold mb-4">Saved Links</h2>
          {renderLinks()}
          <ApiResponseList
              responses={savedCoverLetters}
              onViewResponse={handleViewResponse} // Add this prop
              onDeleteResponse={handleDeleteResponse}
          />
        </div>
        <div className="w-3/4 p-4">
          <h2 className="text-2xl text-green-700 hover:text-green-400 font-bold mb-4">Cover Letter Generator</h2>
          <div className="mb-4">
            <label className="block text-green-500 text-sm font-bold mb-2" htmlFor="resumeText">
              Paste your Resume here
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="resumeText"
              rows="5"
              value={resumeText}
              onChange={(e) => setResumeText(e.target.value)}
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-green-500 text-sm font-bold mb-2" htmlFor="jobDescriptionText">
              Paste your Job Description here
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="jobDescriptionText"
              rows="5"
              value={jobDescriptionText}
              onChange={(e) => setJobDescriptionText(e.target.value)}
            ></textarea>
          </div>
          <div className="mb-4">
            <button
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-4"
              onClick={handleSubmit}
              disabled={isLoading}
            >
              {isLoading ? "Loading..." : "Generate Cover Letter"}
            </button>
            {generatedText && (
              <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={handleSaveResponse}
              >
                Save Response
              </button>
            )}
          </div>
          {generatedText && (
            <div>
              <h3 className="text-xl font-bold mb-2">Generated Cover Letter</h3>
              <p className="text-gray-700 whitespace-pre-wrap">{generatedText}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
  
};

export default Cover;
