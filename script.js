let cols = 7; 
let rows = 4; 
let spacing = 10; 
let brickWidth;
let brickHeight;
let counter = 1; 

function setup() {
  createCanvas(400, 400);
  background(220);

  brickWidth = (width - (cols + 1) * spacing) / cols; 
  brickHeight = 20; 

  
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      let x = j * (brickWidth + spacing) + spacing; 
      let y = i * (brickHeight + spacing) + spacing; 
      let c = color(random(200, 255), random(200, 255), random(200, 255));
      fill(c);
      rect(x, y, brickWidth, brickHeight);
      
      
      fill(0);
      textSize(12);
      textAlign(CENTER, CENTER);
      text(counter, x + brickWidth / 2, y + brickHeight / 2);
      
      counter++; 
    }
  }
}
