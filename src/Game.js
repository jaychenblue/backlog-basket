import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";

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

  handleClick = () => {
    if (this.state.status === "backlog") {
      this.setState({
        status: "completed"
      })
    } else if (this.state.status === "wishlist") {
      this.setState({
        status: "backlog"
      })
    } else if (this.state.status === "completed") {
      this.setState({
        status: "backlog"
      })
    } else {
      this.setState({
        status: "wishlist"
      });
    }
  }

  render() {
    const coverArt = require(`./img/${this.state.image}`);
    var status, statusIcon;
    switch (this.state.status) {
      case "wishlist":
        status = "Saved to your wishlist";
        statusIcon = "star";
        break;
      case "backlog":
        status = "In your backlog";
        statusIcon = "thumbtack";
        break;
      case "completed":
        status = "Completed";
        statusIcon = "checkmark";
        break;
      default:
        status = "Add to your wishlist";
        statusIcon = "plus";
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
          {/* eslint-disable-next-line */}
          <a onClick={this.handleClick}>
            <Icon name={statusIcon} />
            {status}
          </a>
        </Card.Content>
      </Card>
      </>
    );   
  }
}

export default Game;
