import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navigation from "./components/navigation/navigation.component";
import HomePage from "./components/home/home.component";
import About from "./components/about/about.component";
import Portfolio from './components/portfolio/portfolio.component';
import Contact from './components/contact/contact.component';
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
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/resume" component={Resume} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
