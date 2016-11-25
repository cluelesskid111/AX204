// alert("hello");

var pikachu = new Image();
pikachu.src = "pikachu.png";
pikachu.onload = function() {
	ctx5.drawImage(pikachu,50,300,40,60);
};
var snorlax = new Image();
snorlax.src = "snorlax.png";
snorlax.onload = function(){
ctx5.drawImage(snorlax,400,100,100,350);
}



var c = document.getElementById("mycanvas1");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.strokeStyle = "red";
ctx.moveTo(75,0);
ctx.lineTo(150,100);
ctx.lineTo(75,200);
ctx.lineTo(0,100);
ctx.closePath();
ctx.stroke();


 var c2 =document.getElementById("mycanvas2")
var ctx2 = c2.getContext("2d")
ctx2.beginPath();
ctx2.strokeStyle="green";
ctx2.moveTo(0,0);
ctx2.lineTo(300,300);
ctx2.lineTo(300,0);
ctx2.lineTo(0,300);
ctx2.closePath();
ctx2.stroke();
ctx2.fillStyle ="linen";
ctx2.fill();

var c3 = document.getElementById("mycanvas3");
var ctx3 =c3.getContext("2d");
ctx3.beginPath();
ctx3.arc(150,150,50,0,6.28);
ctx3.closePath();
ctx3.stroke();
ctx3.fillStyle = "red";
ctx3.fill();

var c4 = document.getElementById("mycanvas4");
var ctx4 =c4.getContext("2d");
ctx4.beginPath();
ctx4.moveTo(0,0);
ctx4.lineTo(300,300);
ctx4.lineTo(300,150);
ctx4.lineTo(0,150);
ctx4.lineTo(0,0);
ctx4.moveTo(150,0);
ctx4.lineTo(150,300);
ctx4.lineTo(0,300);
ctx4.lineTo(300,0);
ctx4.lineTo(300,0);
ctx4.lineTo(150,0);
ctx4.stroke();
ctx4.closePath();
ctx4.fillStyle = "red";
ctx4.fill();

var c5 = document.getElementById("scene");
var ctx5 = c5.getContext("2d");
//sky and land
ctx5.fillStyle= "green";
ctx5.fillRect(0,350,800,150);
ctx5.fillStyle = "cyan";
ctx5.fillRect(0,0,800,350);
//sun
ctx5.beginPath();
ctx5.arc(100,100,50,0,6.28);
ctx5.closePath();
ctx5.stroke();
ctx5.fillStyle = "yellow";
ctx5.fill();
//path
ctx5.beginPath();
ctx5.moveTo(300,500);
ctx5.lineTo(350,350);
ctx5.lineTo(350,350);
ctx5.lineTo(400,350);
ctx5.lineTo(450,500);
ctx5.closePath();
ctx5.stroke();
ctx5.fillStyle = "grey"
ctx5.fill();

//builds
ctx5.beginPath();

ctx5.fillRect(100,250,200,100);
ctx5.fillRect(100,250,200,100);
ctx5.clearRect(130,280,30,30);
ctx5.clearRect(170,280,30,30);
ctx5.clearRect(210,280,30,30);
ctx5.clearRect(250,280,30,30);




