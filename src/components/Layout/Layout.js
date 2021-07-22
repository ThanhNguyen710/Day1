import React from "react";
import Home from './Home/Home';
import About from './About/About';
import '../styles/App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  
  const Layout = ({children}) => {
    return (
      <Router>
        <div className="App">
          <nav>
            <ul className="nav-bar">
              <li className="nav-item">
                <Link className="nav-link"  to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/About">About</Link>
              </li>
            </ul>
          </nav>           
          <Switch>
            <Route path="/About">
              <About />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
        {children}
      </Router>
    );
  }
  export default Layout;