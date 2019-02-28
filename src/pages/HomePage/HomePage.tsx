import React, { Component } from "react";

class HomePage extends Component {
    public render() {
        return (
            <div className="home-page">
                <h1>Sermon Planner</h1>
                <div>
                    <a href="/createNewSermon">Create New Sermon</a>
                </div>
            </div>
        );
    }
}

export default HomePage;
