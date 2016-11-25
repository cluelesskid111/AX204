//DECLARE ALL VARIABLES AT THE TOP
var canvas;
var ctx;
// Starting position and radius of player sprite
var x = 300;
var x = 300;
var r = 20;
//Holding the speed in the x and y direction
var mx = 0;
var my = 0;
//save position of fruit
var goodX;
var goodY;
var badX;
var badY;
//boleans to keep track of whether collision is occuring.
var goodCollision = false;
var badCollision = false;
// Width and height of our canvas
var WIDTH = 600;
var HEIGHT = 600;
var score = 0;

//Draw circle to denote player sprite
function circle(x,y,r) {
ctx.beginPath();
ctx.arc(x,y,r,0,6,28);
ctx.closePath();
ctx.fillstyle = "linen"
ctx.fill();
}

// wipe our whole canvas
function clear() {
ctx.clearRect(0,0,WIDTH,HEIGHT);
}

//Import our images into canvas 
function drawGood(){
	ctx = document.getElementbyId('myCanvas').getContext('2d');
	var good = new Image();	
	good.src = "Apple.png";
	ctx.drawImage(good,goodX,goodY,50,50)
	}
function drawBad(){
	ctx = document.getElementbyId('myCanvas').getContext('2d');
	var bad = new Image();	
	bad.src = "Rotten-apple.png";
	ctx.drawImage(bad,badX,badY,50,50);
};
//Initialize animation
function init() {
canvas = document.getElementbyId("myCanvas")
ctx = canvas.getContext("2d");
badX = Math.floor(Math.random()* 550);
badY = Math.floor(Math.random()* 550);
goodX = Math.floor(Math.random()* 550);
goodY = Math.floor(Math.random()* 550);
window.onkeydown = keydownControl;
return SetInterval(draw, 10);
}





//Put sprites in random positions 
//Wait for a Keyboard event, then call a function
//Set the Draw() to run every 10 milliseconds
}

//Draw scene function
function draw(){
//call clear() to wipe canvas and draw circle and sprites\
clear();
circle(x,y,r);
drawGood();
drawBad()
//Tell the sprite to bounce of the walls
	if (x + mx > WIDTH - r || x + mx < 0 + r){
	mx = -mx
	} else if (x + mx > WIDTH - r || x + mx < 0 + r){
	mx = -mx
}
//move  sprite
x += mx; 
y += my;


//check for collisions
collisionCheck(){
	if((x >= badX) && ( x = (x <= badX + spriteWidth) && (y >= badY) && ( y <= badY + spriteHeight)){
		badCollision = true;
	} else {
		badCollision = false;
}
if((x >= goodX) && ( x = (x <= goodX + spriteWidth) && (y >= goodY) && ( y <= goodY + spriteHeight)){
		goodCollision = true;
	} else {
		goodCollision = false;
	}
}
//Check for collisions(logic)
// Handles what happens if there is a collision
function collisionHandle() {
  if (badCollision == true) {
    badX = Math.floor(Math.random() * 550);
    badY = Math.floor(Math.random() * 550);
    score -= 1;
    document.getElementById("score").innerHTML = score;
  }

  if (goodCollision == true) {
    goodX = Math.floor(Math.random() * 550);
    goodY = Math.floor(Math.random() * 550);
    score += 1;
    document.getElementById("score").innerHTML = score;
  }
}







//function to check which key is being pressed
function keydownControl(e) {
  if (e.keyCode == 37) {
    mx = -4;
    my = 0;
  } else if (e.keyCode == 38) {
    mx = 0;
    my = -4;
  } else if (e.keyCode == 39) {
    mx = 4;
    my = 0;
  } else if (e.keyCode == 40) {
    mx = 0;
    my = 4;
  } 
}

}

//call entry point function
init();

