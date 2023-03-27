import React from 'react'
import './App.css';
import CSEsecondYear from './components/CSE/SecondYear';
import Dummy from './components/Dummy';
// import Cards from './components/Cards';
// import Login from './components/Login';
// import CSEhome from './components/CSE/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar/>
      {/* <Dummy/> */}
      <CSEsecondYear />
      {/* <Login /> */}
       {/* <Cards/>  */}
      {/* <CSEhome /> */}
    </>
  );
}

export default App;
