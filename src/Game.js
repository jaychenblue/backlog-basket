import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";

import gta5 from "./img/gta5.jpg";
import rdr2 from "./img/rdr2.jpg";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      image: this.props.image,
      platform: this.props.platform,
      status: this.props.status,
      description: this.props.description
    };
  }

  render() {
    const coverArt = require(`./img/${this.state.image}`);
    var status, statusIcon;
    switch (this.state.status) {
      case "backlog":
        status = "Saved in your backlog";
        statusIcon = "thumbtack"
        break;
      default:
        status = "Add to your wishlist";
        statusIcon = "plus"
        break;
    }

    return (
      <>
        <Card>
          <Image
            src={ coverArt }
            wrapped
            ui={false}
          />
          <Card.Content>
            <Card.Header>{this.state.title}</Card.Header>
            <Card.Meta>
              <span className="date">{this.state.platform}</span>
            </Card.Meta>
            <Card.Description>
              {this.state.description}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name={statusIcon} />
              {status}
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
