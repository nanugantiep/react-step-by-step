import React from 'react';
//import logo from './logo.svg';
import Home from "../src/components/home";
import About from "../src/components/about";
import ToDO from "../src/components/todo";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
    <div>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/todo">
        <ToDO />
      </Route>
    </div>
  </Router>)
}

export default App;