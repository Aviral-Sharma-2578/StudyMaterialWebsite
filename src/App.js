import React from 'react'
import './App.css';
// import Cards from './components/Cards';
import CSEhome from './components/CSE/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar/>
      <br/> <br/>
      {/* <Cards/> */}
      <CSEhome />
    </>
  );
}

export default App;
