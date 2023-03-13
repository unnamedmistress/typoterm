import React, { useState } from 'react';

const ResponseForm = ({ user, token }) => {
  const [responses, setResponses] = useState({
    userResponseEssay: '',
    apiResponse: '',
    userResponseCover: '',
    apiResponseCover: '',
    userResponseOutline: '',
    apiResponseOutline: ''
  });

  const handleChange = (e) => {
    setResponses({ ...responses, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { userResponseEssay, apiResponse, userResponseCover, apiResponseCover, userResponseOutline, apiResponseOutline } = responses;
    try {
      const response = await fetch(`/api/user/${user._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': token
        },
        body: JSON.stringify({
          userResponseEssay,
          apiResponse,
          userResponseCover,
          apiResponseCover,
          userResponseOutline,
          apiResponseOutline
        })
      });
      const data = await response.json();
      console.log(data.message);
    } catch (error) {
      console.error('Error while saving responses:', error);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="userResponseEssay">User Response Essay</label>
      <textarea id="userResponseEssay" name="userResponseEssay" value={responses.userResponseEssay} onChange={handleChange}></textarea>
      <label htmlFor="apiResponse">API Response</label>
      <textarea id="apiResponse" name="apiResponse" value={responses.apiResponse} onChange={handleChange}></textarea>
      <label htmlFor="userResponseCover">User Response Cover</label>
      <textarea id="userResponseCover" name="userResponseCover" value={responses.userResponseCover} onChange={handleChange}></textarea>
      <label htmlFor="apiResponseCover">API Response Cover</label>
      <textarea id="apiResponseCover" name="apiResponseCover" value={responses.apiResponseCover} onChange={handleChange}></textarea>
      <label htmlFor="userResponseOutline">User Response Outline</label>
      <textarea id="userResponseOutline" name="userResponseOutline" value={responses.userResponseOutline} onChange={handleChange}></textarea>
      <label htmlFor="apiResponseOutline">API Response Outline</label>
      <textarea id="apiResponseOutline" name="apiResponseOutline" value={responses.apiResponseOutline} onChange={handleChange}></textarea>
      <button type="submit">Save Responses</button>
    </form>
  );
};

export default ResponseForm;
