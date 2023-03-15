import React from 'react';

const CoverLetterView = ({ coverLetter }) => {
  return (
    <div>
      <h3 className="text-xl font-bold mb-2">Cover Letter</h3>
      <p className="text-gray-700 whitespace-pre-wrap">{coverLetter.cover}</p>
      <p className="text-gray-500">
        Created at: {new Date(coverLetter.createdAt).toLocaleString()}
      </p>
    </div>
  );
};

export default CoverLetterView;
