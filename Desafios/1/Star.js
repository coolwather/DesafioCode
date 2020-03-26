function Star(x, y, z) {
    this.pos = createVector(x, y);

    this.update = function() {
        z = z - 1;
    }

    this.show = function() {
        fill(255);
        noStroke();

        var sx = (x / z, 0, 1, 0, width);
        var sy = (y / z, 0, 1, 0, height);

        ellipse(sx, sy, 8, 8);
    }
}