console.log(" file works");

var c = document.getElementById("mycanvas");
var ctx = c.getContext("2d");
	
ctx.fillStyle = "rgb(255,50,25)";
ctx.fillRect(100,100,100,100);
ctx.strokeStyle = "rgb(0,0,255)";
ctx.strokeRect(80,80,140,140);
ctx.clearRect(120,120,60,60);