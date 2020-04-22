import React from 'react';
import Game from './Game.js';
import TopMenu from './TopMenu.js';
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayHome: true,
      displayWishlist: false,
      displayLibrary: false
    };
  }

  cards = [
    {'title': 'Grand Theft Auto V', 'id': 1}
  ];

  handler = (val) => {
    if (val === 'wishlist') {
      this.setState({
        displayHome: false,
        displayWishlist: true,
        displayLibrary: false,
      });
    } else if (val === 'library') {
      this.setState({
        displayHome: false,
        displayWishlist: false,
        displayLibrary: true,
      });
    } else {
      this.setState({
        displayHome: true,
        displayWishlist: false,
        displayLibrary: false,
      });
    }
  };

  header = () => {
    if (this.state.displayWishlist) {
      return (
        <>
        <TopMenu handler={this.handler} />
        <h2 class="ui horizontal divider header">
          <i class="clipboard icon"></i>
          <div class="content">
            My Wishlist
          </div>
        </h2>
        <br />
        </>
      );
    } else if (this.state.displayLibrary) {
      return (
        <>
        <TopMenu handler={this.handler} />
        <h2 class="ui horizontal divider header">
          <i class="gamepad icon"></i>
          <div class="content">
            My Games
          </div>
        </h2>
        <br />
        </>
      );
    } else {
      return (
        <>
        <TopMenu handler={this.handler} />
        <h2 class="ui horizontal divider header">
          <i class="bullhorn icon"></i>
          <div class="content">
            Featured &amp; Recommended
          </div>
        </h2>
        <br />
        </>
      );
    }
  }

  showWishlist = () => {
    if (this.state.displayWishlist) {
      return (
        <>
        <div class="ui center aligned grid">
          <div class="row">
            <div class="three wide column">
              <Game title="Grand Theft Auto V"
                platform="Steam"
                image="origins.jpg"
                description="Enter the lives of criminals as they risk everything in a series of dangerous heists."
                status="wishlist"
              />
            </div>
            <div class="three wide column">
              <Game title="Assassin's Creed Odyssey"
                platform="Steam"
                image="2k20.jpg"
                description="Write your own epic odyssey and become a legendary Spartan hero."
                status="wishlist"
              />
            </div>
            <div class="three wide column">
              <Game title="Sleeping Dogs"
                platform="PS4"
                image="sleeping_dogs.jpg"
                description="Play as an undercover cop trying to take down the Triads from the inside out."
                status="wishlist"
              />
            </div>
          </div>
        </div>
        </>
      );
    }
  }

  showLibrary = () => {
    if (this.state.displayLibrary) {
      return (
        <>
        <div class="ui center aligned grid">
          <div class="row">
            <div class="three wide column">
              <Game title="Pokémon: Let's Go, Eevee!"
                platform="Switch"
                image="grey_eevee.jpg"
                description="Take a Pokémon journey to the Kanto region with your energetic partner, Eevee!"
                status="completed"
              />
            </div>
            <div class="three wide column">
              <Game title="Mario Kart 8"
                platform="Wii U"
                image="mk8.png"
                description="Hit the road as you race and battle against your friends!"
                status="backlog"
              />
            </div>
            <div class="three wide column">
              <Game title="Grand Theft Auto V"
                platform="Steam"
                image="grey_gta5.jpg"
                description="Enter the lives of criminals as they risk everything in a series of dangerous heists."
                status="completed"
              />
            </div>
            <div class="three wide column">
              <Game title="Red Dead Redemption 2"
                platform="PS4"
                image="rdr2.jpg"
                description="Rob, steal and fight your way across the rugged heartland of America."
                status="backlog"
              />
            </div>
          </div>
        </div>
        </>
      );
    }
  }

  showHome = () => {
    if (this.state.displayHome) {
      return (
        <>
        <div class="ui center aligned equal width grid">
          <div class="row">
            <div class="column">
              <Game title="NBA 2K20"
                platform="Steam"
                image="2k20.jpg"
                description="Enter the lives of criminals as they risk everything in a series of dangerous heists."
              />
            </div>
            <div class="column">
              <Game title="The Witcher 3: Wild Hunt"
                platform="PS4"
                image="tw3.jpg"
                description="Rob, steal and fight your way across the rugged heartland of America."
              />
            </div>
            <div class="column">
              <Game title="Shadow of the Tomb Raider"
                platform="Xbox One"
                image="sotr.jpg"
                description="Take a Pokémon journey to the Kanto region with your energetic partner, Eevee!"
              />
            </div>
            <div class="column">
              <Game title="Assassin's Creed Odyssey"
                platform="Steam"
                image="odyssey.jpg"
                description="Write your own epic odyssey and become a legendary Spartan hero."
                status="wishlist"
              />
            </div>
            <div class="column">
              <Game title="Sleeping Dogs"
                platform="PS4"
                image="sleeping_dogs.jpg"
                description="Play as an undercover cop trying to take down the Triads from the inside out."
                status="wishlist"
              />
            </div>
            <div class="column">
              <Game title="Far Cry 5"
                platform="Uplay"
                image="fc5.jpg"
                description="Hit the road as you race and battle against your friends!"
              />
            </div>
          </div>
        </div>
        <div class="ui center aligned equal width grid">
          <div class="row">
            <div class="column">
              <Game title="Grand Theft Auto V"
                platform="Steam"
                image="sekiro.jpg"
                description="Enter the lives of criminals as they risk everything in a series of dangerous heists."
              />
            </div>
            <div class="column">
              <Game title="Assassin's Creed Origins"
                platform="PS4"
                image="origins.jpg"
                description="Rob, steal and fight your way across the rugged heartland of America."
              />
            </div>
            <div class="column">
              <Game title="Far Cry Primal"
                platform="Uplay"
                image="primal.jpg"
                description="Take a Pokémon journey to the Kanto region with your energetic partner, Eevee!"
              />
            </div>
            <div class="column">
              <Game title="Call of Duty: Modern Warfare 2"
                platform="Steam"
                image="mw2.jpg"
                description="Write your own epic odyssey and become a legendary Spartan hero."
              />
            </div>
            <div class="column">
              <Game title="Resident Evil 2"
                platform="PS4"
                image="re2.jpg"
                description="Play as an undercover cop trying to take down the Triads from the inside out."
              />
            </div>
            <div class="column">
              <Game title="Pokémon X"
                platform="3DS"
                image="x.jpg"
                description="Hit the road as you race and battle against your friends!"
              />
            </div>
          </div>
        </div>
        </>
      );
    }
  }

  render() {
    return (
      <>
      {this.header()}
      {this.showHome()}
      {this.showWishlist()}
      {this.showLibrary()}
      </>
    );
  }
}

export default App;
