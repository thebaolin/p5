// Group 1 member names: Alex Abraham , Paulina Chang, Angela Zhang

function setup() {
  canvas=createCanvas(600, 500);
  noStroke()
}

function draw() {
  
  background(250); 
  fill(0, 0, 0) // Change color to black for text
  
  text(`x: ${round(mouseX)}, y: ${round(mouseY)}`, 10, 50) 

  fill(0,0,255) //blue border background
  ellipse(300,250,500)
  
  fill(255,255,255) //white face circle
  ellipse(300,250,385,305)
  
  fill(0,0,255) // blue circle
  ellipse(300,240,385,290)
  
  fill(255,255,255) //small white face circle
  ellipse(300,240,385,240)
  
  fill(0,0,255) //cut out chin
  triangle(240, 365, 220, 400, 300, 400)
  triangle(360, 370, 300, 400, 380, 400)
  rect(250, 370, 100, 50)
  
  fill(255,255,255) //bangs
  triangle(105, 235, 180, 400, 240, 250)
  triangle(495, 235, 420, 400, 360, 250)
  triangle(100, 340, 180, 400, 105, 235)
  triangle(500, 340, 420, 400, 495, 235)
  triangle(365, 376, 500, 340, 390, 420)
  triangle(235, 376, 100, 340, 210, 420)


  fill(0,0,255) //double eyes
  ellipse(240, 250, 60, 70)
  ellipse(360, 250, 60, 70)

  fill(255, 255, 255) //Making the Ears
  triangle(140, 161, 260, 130, 240, 94)
  triangle(460, 161, 340, 130, 360, 94)
  triangle(140, 120, 105, 235, 240, 94)
  triangle(460, 120, 495, 235, 360, 94)

  //Gap Filling
  triangle(105,235, 140,120, 99,340)
  triangle(495,235, 460,120, 500,340)

}

window.onresize = function() {
  // assigns new values for width and height variables
  w = window.innerWidth;
  h = window.innerHeight;  
  canvas.size(w,h);
}

