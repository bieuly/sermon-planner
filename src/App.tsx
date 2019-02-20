import React, { Component } from "react";
import { Card } from "semantic-ui-react";
import "./App.css";

class App extends Component {
  public render() {
    return (
      <div className="App">
        <Card>
          <Card.Content>Hello there</Card.Content>
        </Card>
      </div>
    );
  }
}

export default App;
