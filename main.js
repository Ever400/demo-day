

preload function:
preload: function() { 
// Here we preload the assets

//name image on the left, give path to image on the right 
game.load.image('player', 'Official/Banana.png');
game.load.image('wall', 'Official/wall.png');
game.load.image('coin', 'Official/coin.png');
game.load.image('enemy', 'Official/enemy.png')
},
  
    
    Game settings/player set up in Create():
//change the game's background color
game.stage.backgroundColor = '#3598db';

// Start the Arcade physics system (for movements and collisions)
game.physics.startSystem(Phaser.Physics.ARCADE);

// Add the physics engine to all game objects
game.world.enableBody = true;

this.cursor = game.input.keyboard.createCursorKeys();

// Create the player in the middle of the game
this.player = game.add.sprite(70, 100, 'player');

// Add gravity to make it fall
this.player.body.gravity.y = 600;



Keyboard controls in Update():

// Move the player when an arrow key is pressed
if (this.cursor.left.isDown){ 
this.player.body.velocity.x = -200;
} else if (this.cursor.right.isDown) {
this.player.body.velocity.x = 200;
} else {
this.player.body.velocity.x = 0;
}
// Make the player jump if he is touching the ground
if (this.cursor.up.isDown && this.player.body.touching.down) 
this.player.body.velocity.y = -250;