import React, { Component } from "react";
import { Button, Grid, Header, Icon, Segment } from "semantic-ui-react";

class HomePage extends Component {
  public render() {
    return (
      <div className="Home">
        <Segment placeholder>
          <Grid columns={1} stackable textAlign="center">
            <Grid.Row verticalAlign="middle">
              <Grid.Column>
                <Header icon>
                  <Icon name="book" />
                  Add New Sermon
                </Header>
                <Button primary href="/createNewSermon">
                  Create
                </Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </div>
    );
  }
}

export default HomePage;
