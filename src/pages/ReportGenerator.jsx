import React from 'react';
import Report from '../components/Report';
import '../styles/ReportGenerator.css'; 

export default function ReportGenerator() {
  return (
    <div className="report-generator">
      <>
        <Report text="Hello, this is a report" speed={100} />
      </>
    </div>
  );
}
