import React, { useState, useEffect, useContext } from "react";
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
  const { isLoggedIn, userId } = props;
  const navigate = useNavigate();

  const LOCAL_STORAGE_KEY = "temp_responses";

  useEffect(() => {
    const tempResponses = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (tempResponses) {
      setSavedCoverLetters(tempResponses);
    }
  }, []);

  const LoadingSpinner = () => {
    return (
      <div className="w-16 h-16 border-t-4 border-teal-500 border-solid rounded-full animate-spin"></div>
    );
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(`/api/user/${userId}/responses`, {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        setUserData(response.data);
        setSavedCoverLetters(response.data.userResponses || []); // Set saved cover letters
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    if (isLoggedIn && userId) {
      fetchData();
    }
  }, [isLoggedIn, userId]);

  const handleSubmit = async () => {
    setIsLoading(true);
    const combinedText = `Resume: ${resumeText}\n\nJob Description: ${jobDescriptionText}`;
    const response = await generateText(prompt, combinedText);
    setGeneratedText(response);
    setIsLoading(false);
  };

  const handleSaveTempResponse = () => {
    if (!generatedText) {
      window.alert("Please generate a cover letter first."); // Display an alert message
      return;
    }
    const createdAt = new Date();
    const newSavedCoverLetters = [
      ...savedCoverLetters,
      { cover: generatedText, createdAt },
    ];
    setSavedCoverLetters(newSavedCoverLetters);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newSavedCoverLetters));
  };

  const handleSaveResponse = async () => {
    // Check if the user is logged in
    if (!isLoggedIn || !userId) {
      window.alert('Please log in to save your response.'); // Display an alert message
      navigate('/login'); // Direct the user to the login page
      return;
    } else if (!generatedText) {
      window.alert('Please generate a cover letter first.'); // Display an alert message
      return;
    }
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
    <div className="h-screen flex flex-col bg-gradient-to-r from-teal-900 to-black">
      <div className="flex flex-1">
        {/* Left sidebar */}
        <div className="w-1/6 bg-zinc-800 p-4 overflow-auto">
          <h2 className="text-xl text-white hover:text-teal-400 font-bold mb-4 text-sm">Saved Links</h2>
          {renderLinks()}
          <ApiResponseList
            responses={savedCoverLetters}
            onViewResponse={handleViewResponse}
            onDeleteResponse={handleDeleteResponse}
          />
        </div>
  
        {/* Middle column */}
        <div className="w-5/12 p-4 overflow-auto">
          <h2 className="text-2xl text-teal-700 hover:text-teal-400 font-bold mb-8">Cover Letter Generator</h2>
          <div className="mb-12">
            <label className="block text-teal-500 text-sm font-bold mb-2" htmlFor="resumeText">
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
          <div className="mb-8">
            <label className="block text-teal-500 text-sm font-bold mb-2" htmlFor="jobDescriptionText">
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
              className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-4"
              onClick={handleSubmit}
              disabled={isLoading}
            >
              {isLoading ? <LoadingSpinner /> : "Generate Cover Letter"}
            </button>
            {generatedText && isLoggedIn && (
              <button
                className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={handleSaveResponse}
              >
                Save Response
              </button>
            )}
            {generatedText && !isLoggedIn && (
              <button
                className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={handleSaveTempResponse}
              >
                Save Temporarily
              </button>
            )}
          </div>
        </div>
  
        {/* Right column */}
        <div className="w-5/12 p-4 overflow-auto">
          {generatedText && (
            <div>
              <h3 className="text-xl font-bold mb-2">Generated Cover Letter</h3>
              <div className="text-white whitespace-pre-wrap overflow-auto h-64 border border-gray-300 p-2 rounded text-sm">
                {generatedText}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
  
          }
        

export default Cover;