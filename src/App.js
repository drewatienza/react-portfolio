import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navigation from "./components/navigation/navigation.component";
import HomePage from "./components/home/home.component";
import About from "./components/about/about.component";
import Resume from "./components/resume/resume.component";

import "./App.css";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about" component={About} />
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
