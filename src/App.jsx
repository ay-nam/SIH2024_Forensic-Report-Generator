import './App.css'
import React from 'react';
import {Routes , Router ,Route, BrowserRouter , Navigate} from 'react-router-dom';
import ImageDropzone from './components/ImageDropzone';
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ImageDropzone/>}/>
      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
