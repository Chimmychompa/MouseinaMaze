import Input from './input';
import Mazer from './img/Maze.png'

/** @class Game
  * A class representing the high-level functionality
  * of a game - the game loop, buffer swapping, etc.
  */
export default class Game {
  /** @constructor
    * Creates the game instance
    * @param {integer} width - the width of the game screen in pixels
    * @param {integer} heght - the height of the game screen in pixels
    */
  constructor(width, height) {
    this._start = null;
    this.WIDTH = width;
    this.HEIGHT = height;
    this.input = new Input();
    this.entities = [];

    // Set up the back buffer
    this.backBuffer = document.createElement('canvas');
    this.backBuffer.width = this.WIDTH;
    this.backBuffer.height = this.HEIGHT;
    this.backBufferCtx = this.backBuffer.getContext('2d');

    // Set up the screen buffer
    this.screenBuffer = document.createElement('canvas');
    this.screenBuffer.width = this.WIDTH;
    this.screenBuffer.height = this.HEIGHT;
    this.screenBufferCtx = this.screenBuffer.getContext('2d');
    document.body.append(this.screenBuffer);
    this.mazer = new Image()
    this.mazer.src = Mazer
    this.maze = [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 2, 2, 2, 2, 2, 2, 2, 3, 2, 2, 2, 3, 2, 2, 2, 2, 2, 2, 1, 3, 3, 2, 3, 3, 3, 2, 3, 3, 3, 3, 3, 2, 2, 2, 2, 3, 3, 3, 2, 3, 2, 3, 2, 3, 2, 3, 3, 3, 3, 3, 3, 3, 3, 2, 3, 2, 3, 2, 2, 3, 3, 3, 2, 2, 3, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 2, 2, 2, 2, 3, 3, 2, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 3, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 2, 2, 3, 3, 3, 3, 2, 3, 3, 3, 2, 3, 2, 2, 3, 3, 3, 3, 3, 3, 2, 3, 3, 2, 3, 2, 3, 2, 3, 2, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 3, 3, 2, 2, 2, 2, 2, 3, 2, 2, 2, 3, 2, 2, 3, 2, 3, 2, 3, 2, 2, 2, 3, 2, 2, 2, 2, 2, 3, 3, 3, 2, 3, 3, 3, 3, 3, 3, 2, 3, 2, 3, 2, 3, 2, 2, 3, 2, 3, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 3, 2, 3, 3, 3, 3, 2, 2, 3, 2, 2, 3, 2, 3, 2, 3, 2, 3, 3, 2, 3, 2, 2, 2, 2, 2, 3, 2, 2, 2, 2, 2, 2, 2, 3, 2, 3, 3, 2, 3, 3, 2, 3, 3, 2, 3, 3, 3, 2, 3, 2, 2, 2, 3, 3, 3, 3, 2, 3, 3, 3, 3, 3, 2, 3, 2, 3, 2, 3, 3, 2, 3, 3, 3, 3, 2, 2, 3, 2, 2, 2, 3, 2, 3, 2, 2, 2, 2, 2, 2, 2, 2, 3, 2, 3, 2, 3, 3, 3, 2, 3, 3, 2, 2, 3, 2, 2, 2, 2, 3, 2, 3, 3, 3, 2, 2, 3, 3, 3, 3, 3, 2, 3, 2, 3, 2, 3, 2, 2, 2, 2, 2, 3, 3, 2, 3, 3, 2, 3, 3, 3, 3, 2, 3, 2, 2, 3, 3, 2, 2, 2, 2, 3, 2, 2, 2, 3, 2, 2, 2, 3, 3, 3, 2, 3, 3, 2, 2, 2, 2, 3, 2, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 3, 3, 3, 3, 3, 3, 2, 3, 3, 2, 3, 2, 3, 2, 3, 3, 2, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 2, 3, 2, 3, 3, 2, 2, 3, 2, 2, 3, 2, 2, 3, 3, 2, 3, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 3, 2, 3, 2, 3, 3, 3, 3, 3, 2, 3, 3, 2, 3, 3, 3, 2, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 2, 2, 2, 3, 2, 3, 2, 3, 3, 2, 2, 2, 2, 2, 3, 3, 2, 3, 3, 2, 3, 3, 3, 3, 3, 3, 3, 3, 2, 3, 2, 3, 2, 3, 3, 3, 2, 3, 2, 3, 3, 2, 3, 2, 3, 2, 2, 3, 2, 3, 3, 2, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 2, 2, 2, 2, 2, 3, 3, 3, 3, 2, 3, 2, 3, 3, 3, 3, 2, 3, 2, 2, 3, 2, 3, 3, 3, 3, 3, 2, 3, 3, 3, 3, 3, 3, 2, 3, 2, 2, 3, 3, 3, 2, 3, 2, 2, 2, 2, 3, 2, 2, 2, 2, 3, 2, 2, 2, 2, 2, 3, 2, 3, 2, 2, 2, 2, 2, 2, 3, 3, 2, 2, 3, 3, 3, 3, 2, 3, 3, 3, 3, 3, 2, 3, 2, 3, 3, 3, 3, 3, 2, 3, 2, 3, 3, 3, 3, 3, 3, 2, 3, 3, 3, 3, 3, 3, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3]



}
  /** @method addEntity
    * Adds an entity to the game world
    * Entities should have an update() and render()
    * method.
    * @param {Object} entity - the entity.
    */
  addEntity(entity) {
    this.entities.push(entity);
  }
  /** @method update
    * Updates the game state
    * @param {integer} elapsedTime - the number of milliseconds per frame
    */
  update(elapsedTime) {

    // Update game entitites
    this.entities.forEach(entity => entity.update(elapsedTime, this.input));

    // Swap input buffers
    this.input.update();
  }
  /** @method render
    * Renders the game state
    * @param {integer} elapsedTime - the number of milliseconds per frame
    */
  render(elapsedTime) {
    // Clear the back buffer
    this.backBufferCtx.fillStyle = "white";
    this.backBufferCtx.fillRect(0,0,this.WIDTH, this.HEIGHT);

    // TODO: Render game
    for(var i=1;i<=24*32;i++){
      var row = Math.floor((i-1)/32)
      var col = (i-1) % 32
      this.backBufferCtx.drawImage(this.mazer, (this.maze[i-1]-1) * 32, 0, 32, 32, (col)* 32, (row)*32,32,32)
    }

    // Render entities
    this.entities.forEach(entity => entity.render(elapsedTime, this.backBufferCtx));

    // Flip the back buffer
    this.screenBufferCtx.drawImage(this.backBuffer, 0, 0);
  }
  /** @method loop
    * Updates and renders the game,
    * and calls itself on the next draw cycle.
    * @param {DOMHighResTimestamp} timestamp - the current system time
    */
  loop(timestamp) {
    var elapsedTime = this._frame_start ? timestamp - this._frame_start : 0;
    this.update(elapsedTime);
    this.render(elapsedTime);
    this._frame_start = timestamp;
    window.requestAnimationFrame((timestamp) => {this.loop(timestamp)});
  }
}
