import React, { Component } from "react";
import { Card, Grid, Icon } from "semantic-ui-react";

class CreateNewSermonPage extends Component {
  public render() {
    return (
      <Grid columns="equal">
        <Grid.Column width={5}>
          <Card className="new-slide-card">
            <Card.Content header="New Slide" textAlign="center" />
            <Card.Content textAlign="center">
              <Icon name="plus circle" size="big" color="blue" />
            </Card.Content>
          </Card>
        </Grid.Column>
        <Grid.Column />
      </Grid>
    );
  }
}

export default CreateNewSermonPage;
