import React, { Component } from "react";
import { Route } from "react-router";
import { Segment } from "semantic-ui-react";
import "./App.css";
import CreatePresentationPage from "./pages/CreatePresentationPage/CreatePresentationPage";
import HomePage from "./pages/HomePage/HomePage";

class App extends Component {
    public render() {
        return (
            <div className="App">
                <Segment vertical>
                    <header>
                        <a href="/">ANC</a>
                    </header>
                </Segment>
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
