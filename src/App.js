// import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom';
import './App.css';
import React from 'react';
import Footer from './components/Footer'
import Header from './components/Header'
import NavBar from './components/NavBar'
import About from './components/About'


function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path='/about' component={About} />
        <Header />
      {/* <header className="App-header">
      <Header />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to Portfolio Frontend.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          See Grace's Software Portfolio
        </a>
      </header> */}
      </Switch>
      <Footer />  
    </Router>
  );
}

export default App;
