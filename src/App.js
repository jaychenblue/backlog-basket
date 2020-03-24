import React from 'react';
import TestButton from './TestButton.js';
import Game from './Game.js';

function App() {
  return (
    <>
    <div class="jumbotron">
      <h1 class="display-4">Welcome to the Backlog Basket</h1>
      <p class="lead">Organize your gaming backlog and wishlist here. Play more, discover more.</p>
    </div>
    <Game />
    <Game />
    </>
  );
}

export default App;
