import React, { Component } from "react";
import { Route } from "react-router";
import "./App.css";
import CreatePresentationPage from "./pages/CreatePresentationPage/CreatePresentationPage";
import HomePage from "./pages/HomePage/HomePage";

class App extends Component {
    public render() {
        return (
            <div className="App">
                <Route exact path="/" component={HomePage} />
                <Route
                    path="/new-presentation"
                    component={CreatePresentationPage}
                />
            </div>
        );
    }
}

export default App;
