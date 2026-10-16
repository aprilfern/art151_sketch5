let img;
let bgColor;

let x1 = 0;
let x2 = 0;
let x3 = 0;

let speed = 3;

function setup(){
  createCanvas(400, 400);
  bgColor = color(78, 84, 115);
  angleMode(DEGREES);
}
function draw(){
  background(bgColor);
  
  x1 += speed;
  x2 += speed;
  x3 += speed;
  
  if (x1 > width){
    x1 = 0;
  }
  
  if(x2 > width){
    x2 = 0;
  }
  
  if(x3 > width){
    x3 = 0;
  }
  
  /* Circle */
  fill(228, 200, 247);
  ellipse(x1, 90, 50, 50);
  
  /* Star */
  fill(230, 240, 242);
  rect(x2, 180, 50, 50);
  
  /* triangle */
  fill(208, 247, 200);
  triangle(x3, 270, x3 - 30, 320, x3 + 30, 320);
  
}