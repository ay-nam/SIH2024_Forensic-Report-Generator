// App.js
import './App.css';
import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import ReportGenerator from './pages/ReportGenerator';
import Boxes from './components/Boxes';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Boxes />
            </div>
          }
        />
        <Route path="/report" element={<ReportGenerator />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
