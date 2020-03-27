let a = 0;
let b;
let sponge = [];

function setup() {
    createCanvas(600, 600, WEBGL);
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
    
    //translate(width/2, height/2);
    rotateX(a);
    rotateY(a*0.4);
    rotateZ(a*0.1);
    for(var i = 0; i < sponge.length; i++) {
        sponge[i].show();
    }

    a += 0.01;
}