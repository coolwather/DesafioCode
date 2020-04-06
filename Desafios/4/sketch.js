var drops = [];
var tamanho = 500;

function setup() {
  createCanvas(640, 360);
  for(var i = 0; i < tamanho; i++) {
    drops[i] = new Drop();
  }
}

function draw() {
  background(230, 230, 250);
  for(var i = 0; i < tamanho; i++) {
      var d = drops[i];
      d.fall();
      d.show();
  }
}
