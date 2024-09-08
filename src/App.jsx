import './App.css';
import React from 'react';
import {Routes ,Route, BrowserRouter , Navigate} from 'react-router-dom';
import ImageDropzone from './components/ImageDropzone';
import DynamicTextBoxes from './components/TextBoxes'; 
import Navbar from './components/Navbar';
import ReportGenerator from './pages/ReportGenerator';

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
              <DynamicTextBoxes /> 
            </div>
          }/>
           <Route path='/report' element={<ReportGenerator />} />
          </Routes>
    </BrowserRouter>
  );
}

export default App;
