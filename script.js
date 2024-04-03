let cols = 7; // Number of columns
let rows = 4; // Number of rows
let spacing = 10; // Spacing between boxes
let brickWidth;
let brickHeight;
let counter = 1; // Counter variable for numbering the boxes

function setup() {
  createCanvas(400, 400);
  background(220);

  brickWidth = (width - (cols + 1) * spacing) / cols; // Calculate width of each brick
  brickHeight = 20; // Height of each brick

  // Draw bricks with numbers
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      let x = j * (brickWidth + spacing) + spacing; // Calculate x position
      let y = i * (brickHeight + spacing) + spacing; // Calculate y position
      
      if (counter === 1) {
        fill(255, 105, 180); // Bright pink color for the first box
      } else {
        let c = color(random(200, 255), random(200, 255), random(200, 255)); // Generate random color for other boxes
        fill(c);
      }
      
      rect(x, y, brickWidth, brickHeight);
      
      // Add number inside the box
      fill(0);
      textSize(12);
      textAlign(CENTER, CENTER);
      text(counter, x + brickWidth / 2, y + brickHeight / 2);
      
      counter++; // Increment counter
    }
  }
}
