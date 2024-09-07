// App.js
import './App.css';
import React from 'react';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import ImageDropzone from './components/ImageDropzone';
import DynamicTextBoxes from './components/TextBoxes'; // Import the new component
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <ImageDropzone />
              <DynamicTextBoxes /> {/* Render the new component below the existing one */}
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
