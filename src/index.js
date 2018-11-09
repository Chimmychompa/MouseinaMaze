import Game from './game';
import Player from './player';

// Create the game
var game = new Game(1024, 768);

// Create the player and add it to the game
game.addEntity(new Player(32, 700));

// Start the main game loop
game.loop();
