let x, y, vx, vy, distance, rEllipse, gEllipse, bEllipse;
function setup() {
    createCanvas(600, 600);
    x =  random(width);
    y = random(height);
    rEllipse = random(0, 255);
    gEllipse = random(0, 255);
    bEllipse = random(0, 255);
    vx = 10;
    vy = 10;
}

function draw() {
    background(120, 60, 90);
    fill(rEllipse, gEllipse, bEllipse);
    ellipse(x, y , 100, 100);
     x = x + vx;
     y = y + vy;
       if (x > 550) {
           x = 550;
           vx = random(-vx, -100);
       }
       if (x < 50) {
           x = 50;
           vx = random(20, 100);
       }
    if (y < 50) {
        y = 50;
        vy = random(vy, 100);
    }
    if (y > 550) {
        y = 550;
        vy = random(-vy, - 100);
    }
}

function mouseClicked() {
    distance = dist(mouseX, mouseY, x, y);
    if (distance < 50) {
        rEllipse = random(0, 255);
        gEllipse = random(0, 255);
        bEllipse = random(0, 255);
    }
}