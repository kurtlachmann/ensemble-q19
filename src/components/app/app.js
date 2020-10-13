import React from 'react';
import './app.css';
import Contact from '../contact/contact'
import Header from '../header/header';
import Home from '../home/home';
import Media from '../media/media';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />

        <Switch>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/media">
            <Media />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
      <div style={{height: "15rem"}}></div>
    </div>
  );
}

export default App;
