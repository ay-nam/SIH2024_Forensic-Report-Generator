// App.js
import './App.css';
import React from 'react';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import ImageDropzone from './components/ImageDropzone';
import DynamicTextBoxes from './components/TextBoxes'; // Import the new component

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <ImageDropzone />
              <DynamicTextBoxes /> 
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
