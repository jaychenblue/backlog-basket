import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";

// import {
//   Card, CardImg, CardText, CardBody,
//   CardTitle, CardSubtitle, Button, CardImgOverlay
// } from 'reactstrap';

import gta5 from "./img/gta5.jpg";
import rdr2 from "./img/rdr2.jpg";

class Game extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Red Dead Redemption 2",
      platform: "PS4",
      image1: "rdr2.jpg",
    };
  }

  render() {
    return (
      <>
        <Card>
          <Image
            src={gta5}
            wrapped
            ui={false}
          />
          <Card.Content>
            <Card.Header>Grand Theft Auto V</Card.Header>
            <Card.Meta>
              <span className="date">Steam</span>
            </Card.Meta>
            <Card.Description>
              Enter the lives of criminals as they risk everything in a series of dangerous heists.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name="thumbtack" />
              Saved in your backlog
            </a>
          </Card.Content>
        </Card>
      </>
    );
  }

  componentDidMount() {
    this.setState({
      someKey: "otherValue",
    });
  }
}

export default Game;
