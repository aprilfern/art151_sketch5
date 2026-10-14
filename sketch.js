let img;
let bgColor;

let x1 = 0;
let x2 = 0;
let x3 = 0;

let speed = 3;

function setup(){
  createCanvas(400, 400);
  bgColor = color(51, 17, 64);
  
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
  fill(255, 204, 0);
  ellipse(x1, 180, 50, 50);
  
  
}