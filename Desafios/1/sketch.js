let stars = [];
let tamanho = 800;
let speed;

function setup() {
    createCanvas(800, 800);
    for(let i = 0; i < tamanho; i++) {
        stars[i] = new Star();
    }
}

function draw() {
    speed = map(mouseX, 0, width, 0, 50);
    background(0);
    translate(width/2, height/2);
    for(let i = 0; i < tamanho; i++) {
        stars[i].update();
        stars[i].show();
    }
}