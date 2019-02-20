import React, { Component } from "react";
import { Route } from "react-router";
import "./App.css";
import CreateSermonPage from "./pages/CreateSermonPage/CreateSermonPage";
import HomePage from "./pages/HomePage/HomePage";

class App extends Component {
  public render() {
    return (
      <div className="App">
        <Route exact path="/" component={HomePage} />
        <Route path="/createNewSermon" component={CreateSermonPage} />
      </div>
    );
  }
}

export default App;
