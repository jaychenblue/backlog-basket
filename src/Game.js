import React from 'react';

class Game extends React.Component {
  constructor() {
    super();
    this.state = {
      title: 'Red Dead Redemption 2'
    };
  }

  render() {
    return (
        <div>
            {this.state.title}
            <br />
            <button type="button" class="btn btn-primary">
                Oyy
            </button>
        </div>
    );
  }

  componentDidMount() {
    this.setState({
      someKey: 'otherValue'
    });
  }
}

export default Game;
