import React, { useState, useRef, useEffect } from "react";
import generateText from "../openai.js";
const prompt = "Write coverletter ";
const response = generateText;

const Cover = (props) => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Headlking</h1>
      <p style={{ textAlign: "center" }}>instructions </p>
    </div>
  );
}

export default Cover; 