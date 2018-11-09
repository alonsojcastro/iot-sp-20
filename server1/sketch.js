/*
 * @name Animation
 * @description The circle moves.
 */
// Where is the circle

var x, y, z;
var pres=0;

function setup() {
  var width = 255
  var height =255
  createCanvas(width, height);
  textSize(20);

}

function draw() {

  background(z/4);
  text("x="+x+" y="+y+" z="+z, 10, 30);

  stroke(50);
  fill(50);
  
  ellipse(x/4, y/4, 20, 20);

}

