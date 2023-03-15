import React from "react";

const ApiResponseList = ({ responses, onViewResponse, onDeleteResponse }) => (
    <ul className="list-disc ml-5">
      {responses.map((response, index) => (
        <li key={index} className="mb-2">
          <button
            className="text-blue-600 hover:text-blue-800"
            onClick={() => onViewResponse(index)}
          >
            View
          </button>
          <span className="mx-2">|</span>
          <button
            className="text-red-600 hover:text-red-800"
            onClick={() => onDeleteResponse(index)}
          >
            Delete
          </button>
          <span className="mx-4 text-gray-500">
            {new Date(response.createdAt).toLocaleString()} {/* Display the date stamp */}
          </span>
        </li>
      ))}
    </ul>
  );

export default ApiResponseList;
