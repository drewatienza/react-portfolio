import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navigation from "./components/navigation/navigation.component";
import HomePage from "./components/home/home.component";
import Resume from "./components/resume/resume.component";

import "./App.css";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about">
            This is the about page
          </Route>
          <Route exact path="/portfolio">
            This is the portfolio page
          </Route>
          <Route exact path="/contact">
            This is the contact page
          </Route>
          <Route exact path="/resume" component={Resume} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
