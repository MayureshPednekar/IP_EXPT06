import React from 'react';
import './App.css';
import Header from './component/Header';
import PersonalInfo from './component/PersonalInfo';
import Skills from './component/Skills';
import Contact from './component/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <PersonalInfo />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
