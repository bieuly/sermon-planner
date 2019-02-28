import React, { Component } from "react";
import { Button } from "semantic-ui-react";
import "./styles.css";

class HomePage extends Component {
    public render() {
        return (
            <div className="home-page">
                <header>
                    <h1>The Worshipper's Presenter</h1>
                    <div>
                        <Button
                            href="/new-presentation"
                            size="big"
                            color="blue"
                        >
                            Get Started
                        </Button>
                    </div>
                </header>
            </div>
        );
    }
}

export default HomePage;
