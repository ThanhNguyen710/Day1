import React, { Component } from "react";
import Home from './Home/Home';
import About from './About/About';
import '../styles/App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  
  export default function App() {
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
  
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/About">
              <About />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }