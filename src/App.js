
import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from './component/Home'
import Submit from './component/Submit'
import React from 'react';

function App() {
  return (
    <div className='App'>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/submit" element={<Submit/>}/>
    </Routes>
    </div>
  );
}

export default App;
