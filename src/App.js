// import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom';
import './App.css';
import { Component } from 'react';
import SideBar from './components/SideBar'
import Footer from './components/Footer'
// import Header from './components/Header'
// import About from './components/About'
// import Contact from './components/Contact'
// import Projects from './components/Projects'
// import Blogs from './components/Blogs'
import PortfolioContainer from './containers/PortfolioContainer';



class App extends Component {
  render() {
    return (
      // <Router>
        <div className= "App">
        <PortfolioContainer />
        {/* <Switch>
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/projects' component={Projects} />
          <Route exact path='/blogs' component={Blogs} /> */}
          
        
          
  
        {/* </Switch>  */}
          <Footer />
          <SideBar />
        </div>
      //  </Router> 
      
    );
  }
}

export default App;
