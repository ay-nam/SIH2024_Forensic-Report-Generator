import React, { useState, useEffect } from 'react';
import Report from '../components/Report';
import '../styles/ReportGenerator.css';

export default function ReportGenerator() {
  const [key, setKey] = useState(0);
  const [reportText, setReportText] = useState(''); 

  const regenerateText = () => {
    setKey(prevKey => prevKey + 1); 
    fetchText(); 
  };

  const fetchText = () => {
    fetch('http://192.168.190.86:5000/reports')  
      .then(response => response.json())
      .then(data => {
        const fetchedText = data; // Assuming data is an array of text, join them together
        setReportText(fetchedText);
      })
      .catch(error => console.error('Error fetching report text:', error));
  };

  useEffect(() => {
    fetchText(); 
  }, []);

  return (
    <div className="report-generator">
      <Report key={key} text={reportText} speed={100} /> 
      <button onClick={regenerateText} className="regenerate-button">
        Regenerate
      </button>
    </div>
  );
}


