import React, { Component } from "react";

class HomePage extends Component {
    public render() {
        return (
            <div className="home-page">
                <h1>All Nations Church Presents</h1>
                <div>
                    <a href="/new-presentation">Create New Slides</a>
                </div>
            </div>
        );
    }
}

export default HomePage;
