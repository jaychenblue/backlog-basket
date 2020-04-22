import React from 'react';
import Game from './Game.js';
import TopMenu from './TopMenu.js';
import "./App.css";

function App() {
  return (
    <>
      <TopMenu />

      <h2 class="ui horizontal divider header">
        <i class="bullhorn icon"></i>
        <div class="content">
          Featured &amp; Recommended
        </div>
      </h2>
      <br />

      <div class="ui center aligned grid">
        <div class="row">
          <div class="three wide column">
            <Game title="Grand Theft Auto V"
              platform="Steam"
              image="gta5.jpg"
              description="Enter the lives of criminals as they risk everything in a series of dangerous heists."
            />
          </div>
          <div class="three wide column">
            <Game title="Red Dead Redemption 2"
              platform="PS4"
              image="rdr2.jpg"
              description="Rob, steal and fight your way across the rugged heartland of America."
            />
          </div>
          <div class="three wide column">
            <Game title="Pokémon: Let's Go, Eevee!"
              platform="Switch"
              image="eevee.jpg"
              description="Take a Pokémon journey to the Kanto region with your energetic partner, Eevee!"
            />
          </div>
          <div class="three wide column">
            <Game title="Assassin's Creed Odyssey"
              platform="Steam"
              image="odyssey.jpg"
              description="Write your own epic odyssey and become a legendary Spartan hero."
            />
          </div>
          <div class="three wide column">
            <Game title="Sleeping Dogs"
              platform="PS4"
              image="sleeping_dogs.jpg"
              description="Play as an undercover cop trying to take down the Triads from the inside out."
            />
          </div>
        </div>
      </div>

      <br />
      <h2 class="ui horizontal divider header">
        <i class="gamepad icon"></i>
        <div class="content">
          My Library
        </div>
      </h2>
      <br />

      <div class="ui center aligned grid">
        <div class="row">
          <div class="three wide column">
            <Game title="Mario Kart 8"
              platform="Wii U"
              image="mk8.png"
              status="backlog"
              description="Hit the road as you race and battle against your friends!"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
