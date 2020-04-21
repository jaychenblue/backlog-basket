import React from 'react';
import Game from './Game.js';
import "./App.css";

function App() {
  return (
    <>
      <Game title="Grand Theft Auto V"
          platform="Steam"
          image="gta5.jpg"
          status="backlog"
          description="Enter the lives of criminals as they risk everything in a series of dangerous heists."
      />
      <Game title="Red Dead Redemption 2"
          platform="PS4"
          image="rdr2.jpg"
          description="Rob, steal and fight your way across the rugged heartland of America."
      />
      <Game title="Pokémon: Let's Go, Eevee!"
          platform="Switch"
          image="lg_eevee.jpg"
          description="Take a Pokémon journey to the Kanto region with your energetic partner, Eevee!"
      />
    </>
  );
}

export default App;
