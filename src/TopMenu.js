import React from 'react';
import { Menu } from 'semantic-ui-react';

class TopMenu extends React.Component {
  constructor() {
    super();
    this.state = {
      activeItem: 'home'
    };
  }

  handleMenuClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    return (
      <Menu color="blue" widths={3}>
          <Menu.Item
              name='home'
              active={this.state.activeItem === 'home'}
              onClick={this.handleMenuClick}
          />
          <Menu.Item
              name='wishlist'
              active={this.state.activeItem === 'wishlist'}
              onClick={this.handleMenuClick}
          />
          <Menu.Item
              name='library'
              active={this.state.activeItem === 'library'}
              onClick={this.handleMenuClick}
          />
      </Menu>
    );
  }

  componentDidMount() {
    this.setState({
      someKey: 'otherValue'
    });
  }
}

export default TopMenu;
