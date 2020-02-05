var circles = {
  d: 25,
  x: 0,
  y: 0
};

var r = 0;
var g = 0;
var b = 0;

function setup(){
  createCanvas(600,400);
  circles.d = 20;
}

function draw(){
  circles.x = random(0, width);
  circles.y = random(0, height);

  r = map(circles.x, 0, width, 0, 255);
  g = map(circles.y, 0, height, 0, 255);

  fill(r,g,b);

  ellipse(circles.x, circles.y, circles.d);
}
