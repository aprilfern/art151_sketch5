let bgColor;

let canvasW = 700;
let canvasH = 700;



function setup(){
  createCanvas(canvasW, canvasH);
  bgColor = color(51, 17, 64);
  background(bgColor);
  
}
function draw(){
  fill('lightblue');
  ellipse(width/3,height/2,70,50)
}