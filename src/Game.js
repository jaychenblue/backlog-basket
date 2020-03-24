import React from 'react';

import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, CardImgOverlay
} from 'reactstrap';

import gta5 from './img/gta5.jpg';
import rdr2 from './img/rdr2.jpg';

class Game extends React.Component {
  constructor() {
    super();
    this.state = {
      title: 'Red Dead Redemption 2',
      platform: 'PS4',
      image1: 'rdr2.jpg'
    };
  }

  render() {
    return (
        // <div>
        //     {this.state.title}
        //     <br />
        //     {this.state.platform}
        //     <br />
        //     <button type="button" class="btn btn-primary">
        //         Add to Wishlist
        //     </button>
        // </div>
        
        <div>
          <Card height="10%">
            <CardImg top width="5%" src={rdr2} />
            <CardBody>
              <CardTitle>{this.state.title}</CardTitle>
              <CardSubtitle>{this.state.platform}</CardSubtitle>
              <Button>Add to Library</Button>
            </CardBody>
          </Card>
        </div>

        // <div>
        //   <img src={gta5}></img>
        // </div>
    );
  }

  componentDidMount() {
    this.setState({
      someKey: 'otherValue'
    });
  }
}

export default Game;
