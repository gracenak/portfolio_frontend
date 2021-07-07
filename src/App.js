import logo from './logo.svg';
import './App.css';
import React from 'react';
import Footer from './components/Footer'
import Header from './components/Header'
import NavBar from './components/NavBar'


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Header />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to Portfolio Frontend.
        </p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        > */}
          {/* See Grace's Software Portfolio
        </a> */}
      </header>
      <Footer />
    </div>
  );
}

export default App;
