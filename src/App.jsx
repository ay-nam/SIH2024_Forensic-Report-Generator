// App.js
import './App.css';
import React from 'react';
import {Routes ,Route, BrowserRouter , Navigate} from 'react-router-dom';
import ImageDropzone from './components/ImageDropzone';
import DynamicTextBoxes from './components/TextBoxes';
import ReportGenerator from './pages/ReportGenerator';
function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route
          path="/"
          element={
            <div>
              <ImageDropzone />
              <DynamicTextBoxes /> {/* Render the new component below the existing one */}
            </div>
          }/>
           <Route path='/report' element={<ReportGenerator />} />
          </Routes>
    </BrowserRouter>
  );
}

export default App;
