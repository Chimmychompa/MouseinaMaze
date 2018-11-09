/** @module Player
  * A class representing the player.
  */
import Idle_Up from './img/IdleUp.png';
import Idle_Down from './img/IdleDown.png';
import Idle_Left from './img/IdleLeft.png';
import Idle_Right from './img/IdleRight.png';

import Move_Up from './img/MoveUp.png';
import Move_Down from './img/MoveDown.png';
import Move_Left from './img/MoveLeft.png';
import Move_Right from './img/MoveRight.png';
export default class Player {
  /** @constructorugbhyhb
    * Constructs a new player instance
    * @param {float} x - the player's x position
    * @param {float} y - the player's y position
    */
  constructor(x, y) {
    this.x = x;
    this.y = y;

    this.IdleUp = new Image();
    this.IdleUp.src = Idle_Up;

    this.IdleDown = new Image();
    this.IdleDown.src = Idle_Down;

    this.IdleRight = new Image();
    this.IdleRight.src = Idle_Right;

    this.IdleLeft = new Image();
    this.IdleLeft.src = Idle_Left;

    this.MoveUp = new Image();
    this.MoveUp.src = Move_Up;

    this.MoveDown = new Image();
    this.MoveDown.src = Move_Down;

    this.MoveRight = new Image();
    this.MoveRight.src = Move_Right;

    this.MoveLeft = new Image();
    this.MoveLeft.src = Move_Left;

    this.image = this.IdleRight
    this.left = false;
    this.right = false;
    this.up = false;
    this.down = false;

    this.frame = 0;
    this.counter = 0

    this.maze = [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 2, 2, 2, 2, 2, 2, 2, 3, 2, 2, 2, 3, 2, 2, 2, 2, 2, 2, 1, 3, 3, 2, 3, 3, 3, 2, 3, 3, 3, 3, 3, 2, 2, 2, 2, 3, 3, 3, 2, 3, 2, 3, 2, 3, 2, 3, 3, 3, 3, 3, 3, 3, 3, 2, 3, 2, 3, 2, 2, 3, 3, 3, 2, 2, 3, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 2, 2, 2, 2, 3, 3, 2, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 3, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 2, 2, 3, 3, 3, 3, 2, 3, 3, 3, 2, 3, 2, 2, 3, 3, 3, 3, 3, 3, 2, 3, 3, 2, 3, 2, 3, 2, 3, 2, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 3, 3, 2, 2, 2, 2, 2, 3, 2, 2, 2, 3, 2, 2, 3, 2, 3, 2, 3, 2, 2, 2, 3, 2, 2, 2, 2, 2, 3, 3, 3, 2, 3, 3, 3, 3, 3, 3, 2, 3, 2, 3, 2, 3, 2, 2, 3, 2, 3, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 3, 2, 3, 3, 3, 3, 2, 2, 3, 2, 2, 3, 2, 3, 2, 3, 2, 3, 3, 2, 3, 2, 2, 2, 2, 2, 3, 2, 2, 2, 2, 2, 2, 2, 3, 2, 3, 3, 2, 3, 3, 2, 3, 3, 2, 3, 3, 3, 2, 3, 2, 2, 2, 3, 3, 3, 3, 2, 3, 3, 3, 3, 3, 2, 3, 2, 3, 2, 3, 3, 2, 3, 3, 3, 3, 2, 2, 3, 2, 2, 2, 3, 2, 3, 2, 2, 2, 2, 2, 2, 2, 2, 3, 2, 3, 2, 3, 3, 3, 2, 3, 3, 2, 2, 3, 2, 2, 2, 2, 3, 2, 3, 3, 3, 2, 2, 3, 3, 3, 3, 3, 2, 3, 2, 3, 2, 3, 2, 2, 2, 2, 2, 3, 3, 2, 3, 3, 2, 3, 3, 3, 3, 2, 3, 2, 2, 3, 3, 2, 2, 2, 2, 3, 2, 2, 2, 3, 2, 2, 2, 3, 3, 3, 2, 3, 3, 2, 2, 2, 2, 3, 2, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 3, 3, 3, 3, 3, 3, 2, 3, 3, 2, 3, 2, 3, 2, 3, 3, 2, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 2, 3, 2, 3, 3, 2, 2, 3, 2, 2, 3, 2, 2, 3, 3, 2, 3, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 3, 2, 3, 2, 3, 3, 3, 3, 3, 2, 3, 3, 2, 3, 3, 3, 2, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 2, 2, 2, 3, 2, 3, 2, 3, 3, 2, 2, 2, 2, 2, 3, 3, 2, 3, 3, 2, 3, 3, 3, 3, 3, 3, 3, 3, 2, 3, 2, 3, 2, 3, 3, 3, 2, 3, 2, 3, 3, 2, 3, 2, 3, 2, 2, 3, 2, 3, 3, 2, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 2, 2, 2, 2, 2, 3, 3, 3, 3, 2, 3, 2, 3, 3, 3, 3, 2, 3, 2, 2, 3, 2, 3, 3, 3, 3, 3, 2, 3, 3, 3, 3, 3, 3, 2, 3, 2, 2, 3, 3, 3, 2, 3, 2, 2, 2, 2, 3, 2, 2, 2, 2, 3, 2, 2, 2, 2, 2, 3, 2, 3, 2, 2, 2, 2, 2, 2, 3, 3, 2, 2, 3, 3, 3, 3, 2, 3, 3, 3, 3, 3, 2, 3, 2, 3, 3, 3, 3, 3, 2, 3, 2, 3, 3, 3, 3, 3, 3, 2, 3, 3, 3, 3, 3, 3, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3]

    this.index = Math.floor(y/32) * 32 + Math.floor(x/32)

  }

  //store all images needed


  /** @method update
    * Updates the player
    * @param {double} deltaT - the elapsed time
    * @param {Input} input - the input object
    */
  update(deltaT, input) {
    //makes sure frames dont switch too fast
    this.counter += 1;
    if(this.counter >= 10){
      this.counter = 0
      this.frame +=1;
      if(this.frame >= 4) {
        this.frame = 0;
      }
    }

    //Left Arrow
    if(input.keyPressed("ArrowLeft")){
       this.index = Math.floor((this.y+16)/32) * 32 + Math.floor(this.x/32)
       if(this.maze[this.index] != 3){
         this.x--;
       }else{
         this.x++;
       }

       this.left = true;
       this.image = this.MoveLeft;
     }
    else if(input.keyUp("ArrowLeft") && this.left){
        this.image = this.IdleLeft;
        this.left = false;
        this.frame = 0;
     }

     //Right Arrow
     if(input.keyPressed("ArrowRight")){
       this.index = Math.floor((this.y + 16)/32) * 32 + Math.floor((this.x + 32)/32)
       if(this.maze[this.index] != 3){
         this.x++;
       }else{
         this.x--;
       }
       this.right = true;
       this.image = this.MoveRight
     }
    else if(input.keyUp("ArrowRight") && this.right){
        this.image = this.IdleRight;
        this.right = false
        this.frame = 0;
      }

    //Up Arrow
    if(input.keyPressed("ArrowUp")){
      this.index = Math.floor(this.y/32) * 32 + Math.floor((this.x+16)/32)
      if(this.maze[this.index] != 3){
        this.y--;
      }else{
        this.y++;
      }
       this.up = true;
       this.image = this.MoveUp
    }
    else if(input.keyUp("ArrowUp") && this.up){
       this.image = this.IdleUp;
       this.up = false
       this.frame = 0;
     }

     //down arrow
     if(input.keyPressed("ArrowDown")){
       this.index = Math.floor((this.y+32)/32) * 32 + Math.floor((this.x+16)/32)
       if(this.maze[this.index] != 3){
         this.y++;
       }else{
         this.y--;
       }
       this.down = true;
       this.image = this.MoveDown
    }
    else if(input.keyUp("ArrowDown") && this.down){
       this.image = this.IdleDown;
       this.down = false
       this.frame = 0;
     }
  }

  /** @method render
    * Renders the player
    * @param {double} deltaT - elapsed time
    * @param {Context2D} context - the rendering context
    */
  render(deltaT, context) {
    if(this.up || this.down || this.right || this.left){
      //image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight
      switch (this.frame) {
        case 0: context.drawImage(this.image, 0, 0, 32, 32, this.x, this.y, 32, 32);
          break;
        case 1: context.drawImage(this.image, 32, 0, 32, 32, this.x, this.y, 32, 32);
          break;
        case 2: context.drawImage(this.image, 0, 32, 32, 32, this.x, this.y, 32, 32);
          break;
        case 3: context.drawImage(this.image, 32, 32, 32, 32, this.x, this.y, 32, 32);
          break;
        default:
      }
    }else{
      context.drawImage(this.image, this.x, this.y);
    }


  }

}
