var a = 0;
var b;
var sponge = [];

function setup() {
  createCanvas(400, 400, WEBGL);
  b = new Box(0, 0, 0, 200);
  sponge.push(b);
}

function mousePressed() {
  var next = [];
  for(var i = 0; i < sponge.length; i++) {
    var b = sponge[i];
    var newBoxes = b.generate();
    next = next.concat(newBoxes);
  }
  sponge = next;
}

function draw() {
  background(51);
  stroke(255);
  noFill();
  lights();

  rotateX(a)
  rotateY(a*0.4);
  rotateZ(a*0.1);
  for(var i = 0; i < sponge.length; i++) {
    sponge[i].show();
  }

  a += 0.01;
}
