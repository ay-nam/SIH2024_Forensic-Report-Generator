import './App.css'
import React from 'react';
import {Routes,Route, BrowserRouter , Navigate} from 'react-router-dom';
import ImageDropzone from './components/ImageDropzone';
import ReportGenerator from './pages/ReportGenerator';


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes> 
        <Route path='/' element={<ImageDropzone/>}/>
        <Route path='/report' element={<ReportGenerator />} />
      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
