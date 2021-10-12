function setup() {
  createCanvas(windowWidth,windowHeight);
 
}
let t = 0;

function draw() {
  background(10,10);
  stroke("white");
  strokeWeight(0.5);
  

  let c = random(-5,5);
  let h = c/2;

  for (let x = 0; x <= width; x = x + 30) {
    for (let y = 0; y <= height; y = y + 30){
       // starting point of each circle depends on mouse position
      const xAngle = map(mouseX, 0, width, -4 * PI, 4 * PI, true);
      const yAngle = map(mouseY, 0, height, -4 * PI, 4 * PI, true);
      // and also varies based on the particle's location
      const angle = xAngle * (x / width) + yAngle * (y / height);

      // each particle moves in a circle
      const myX = x + 50 * cos(2 * PI * t + angle);
      const myY = y + 25 * sin(2 * PI * t + angle);
      star(myX, myY, c, h,7);

      t= t + 0.01;

      from = color(255, 0, 0, 0.2 * 255);
      to = color(0, 0, 255, 0.2 * 255);

      if (c < 0) {
        fill(from);
    }
    else { 
      fill(to);
    }
  }
  }
}


function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}