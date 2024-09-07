import React, { useState, useEffect } from "react";
import '../styles/Report.css'; 

const Report = ({ text, speed = 100 }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text[index]);
        index++;
      } else {
        clearInterval(intervalId);
      }
    }, speed);

    return () => clearInterval(intervalId);
  }, [text, speed]);

  return <div className="report-text">{displayedText}</div>; // Apply the class
};

export default Report;
