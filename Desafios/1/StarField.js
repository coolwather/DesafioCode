var stars = [];
var tamanho = 100;

function setup() {
    createCanvas(400, 400);
    for(var i = 0; i < tamanho; i++) {
        var x = random(0, width);
        var y = random(0, height);
        var z = width;
        stars[i] = new Star(x, y, z);
    }
}

function draw() {
    background(0);
    for(var i = 0; i < tamanho; i++) {
        stars[i].update();
        stars[i].show();
    }
}