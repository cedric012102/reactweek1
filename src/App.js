import React from 'react';
import './App.css';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
  <nav>
        <a href="#">About</a>
        <a href="#">Contact</a>
        <a href="#">News</a>
  </nav>
  <div className="loginBox">
     <Login /> 
  </div>
    </div>
  );
}

export default App;
