import React from 'react';
import Header from './Header';
import PersonalInfo from './PersonalInfo';
import Skills from './Skills';
import Profile from './Profile';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';



function Home() {
  return (
    <div className="App">
      <Header />
      <PersonalInfo />
      <Skills />
      <Profile />
    </div>
    // <div className='App'>
    // <Routes>
    //   <Route path="/" element={<Home/>}/>
    //   <Route path="/submit" element={<Submit/>}/>
    // </Routes>
    // </div>
  );
}

export default Home;

