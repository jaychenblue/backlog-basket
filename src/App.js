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

  nav = () => {
    if (this.state.displayWishlist) return 1;
    if (this.state.displayLibrary) return 2;
    return 0;
  }

  handler = (val) => {
    if (val === 'wishlist') {
      this.setState({
        displayHome: false,
        displayWishlist: true,
        displayLibrary: false
      });
    } else if (val === 'library') {
      this.setState({
        displayHome: false,
        displayWishlist: false,
        displayLibrary: true
      });
    } else {
      this.setState({
        displayHome: true,
        displayWishlist: false,
        displayLibrary: false
      });
    }
  };

  render() {
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
        <div class="ui center aligned equal width grid">
          <div class="row">
            <div class="column">
              <Game title="Grand Theft Auto V"
                platform="Steam"
                image="gta5.jpg"
                description="Enter the lives of criminals as they risk everything in a series of dangerous heists."
                nav={this.nav}
              />
            </div>
            <div class="column">
              <Game title="Red Dead Redemption 2"
                platform="PS4"
                image="rdr2.jpg"
                description="Rob, steal and fight your way across the rugged heartland of America."
              />
            </div>
            <div class="column">
              <Game title="Pokémon: Let's Go, Eevee!"
                platform="Switch"
                image="eevee.jpg"
                description="Take a Pokémon journey to the Kanto region with your energetic partner, Eevee!"
              />
            </div>
            <div class="column">
              <Game title="Assassin's Creed Odyssey"
                platform="Steam"
                image="odyssey.jpg"
                description="Write your own epic odyssey and become a legendary Spartan hero."
              />
            </div>
            <div class="column">
              <Game title="Sleeping Dogs"
                platform="PS4"
                image="sleeping_dogs.jpg"
                description="Play as an undercover cop trying to take down the Triads from the inside out."
              />
            </div>
            <div class="column">
              <Game title="Mario Kart 8"
                platform="Wii U"
                image="mk8.png"
                description="Hit the road as you race and battle against your friends!"
              />
            </div>
          </div>
        </div>
        </>
      );
    } else if (this.state.displayLibrary) {
      return (
        <>
        <TopMenu handler={this.handler} />
        <h2 class="ui horizontal divider header">
          <i class="gamepad icon"></i>
          <div class="content">
            My Library
          </div>
        </h2>
        <br />
        <div class="ui center aligned equal width grid">
          <div class="row">
            <div class="column">
              <Game title="Grand Theft Auto V"
                platform="Steam"
                image="gta5.jpg"
                description="Enter the lives of criminals as they risk everything in a series of dangerous heists."
                nav={this.nav}
              />
            </div>
            <div class="column">
              <Game title="Red Dead Redemption 2"
                platform="PS4"
                image="rdr2.jpg"
                description="Rob, steal and fight your way across the rugged heartland of America."
              />
            </div>
            <div class="column">
              <Game title="Pokémon: Let's Go, Eevee!"
                platform="Switch"
                image="eevee.jpg"
                description="Take a Pokémon journey to the Kanto region with your energetic partner, Eevee!"
              />
            </div>
            <div class="column">
              <Game title="Assassin's Creed Odyssey"
                platform="Steam"
                image="odyssey.jpg"
                description="Write your own epic odyssey and become a legendary Spartan hero."
              />
            </div>
            <div class="column">
              <Game title="Sleeping Dogs"
                platform="PS4"
                image="sleeping_dogs.jpg"
                description="Play as an undercover cop trying to take down the Triads from the inside out."
              />
            </div>
            <div class="column">
              <Game title="Mario Kart 8"
                platform="Wii U"
                image="mk8.png"
                description="Hit the road as you race and battle against your friends!"
              />
            </div>
          </div>
        </div>
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
  
        <div class="ui center aligned equal width grid">
          <div class="row">
            <div class="column">
              <Game title="Grand Theft Auto V"
                platform="Steam"
                image="gta5.jpg"
                description="Enter the lives of criminals as they risk everything in a series of dangerous heists."
                nav={this.nav}
              />
            </div>
            <div class="column">
              <Game title="Red Dead Redemption 2"
                platform="PS4"
                image="rdr2.jpg"
                description="Rob, steal and fight your way across the rugged heartland of America."
              />
            </div>
            <div class="column">
              <Game title="Pokémon: Let's Go, Eevee!"
                platform="Switch"
                image="eevee.jpg"
                description="Take a Pokémon journey to the Kanto region with your energetic partner, Eevee!"
              />
            </div>
            <div class="column">
              <Game title="Assassin's Creed Odyssey"
                platform="Steam"
                image="odyssey.jpg"
                description="Write your own epic odyssey and become a legendary Spartan hero."
              />
            </div>
            <div class="column">
              <Game title="Sleeping Dogs"
                platform="PS4"
                image="sleeping_dogs.jpg"
                description="Play as an undercover cop trying to take down the Triads from the inside out."
              />
            </div>
            <div class="column">
              <Game title="Mario Kart 8"
                platform="Wii U"
                image="mk8.png"
                description="Hit the road as you race and battle against your friends!"
              />
            </div>
          </div>
        </div>
        </>
      );
    }

    // return (
    //   <>
    //     <TopMenu handler={this.handler} />
    //   </>
    // );
  }
}

export default App;
