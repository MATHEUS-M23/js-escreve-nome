function setup() {
    createCanvas(500, 500);
    background("white")
  }
  
  function draw() {
    stroke("blue");
    fill("red");
    
    
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 5, 15);
    }
  }
  