/* The theme is Omniscient Reader's Viewpoint, which is my favorite
korean novel. Kim Dokja, Yoo Joonghyuk, and Han Sooyoung are three
important main characters in the novel. They are seen as a trio
because they represent the reader, main character, and author of a 
story. The whole novel is about stories and their power in people's
lives. */
let img;
let bgColor;

let x1 = 0;
let x2 = 0;
let x3 = 0;

let speed = 3;

function preload(){
  img = loadImage('media/orv.jpg');
}

function setup(){
  createCanvas(400, 400);
  bgColor = color(78, 84, 115);
  rectMode(CENTER);
}
function draw(){
  background(bgColor);
  image(img, 100, 150, 200, 100);
  
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
  
  noStroke();
  
  /* Kim Dokja colors */
  let white = color(255, 255, 255);
  let red = color(112, 20, 20);
  let kimDokja = lerpColor(white, red, x1/width);
  
  /* Shrink Circle */
  let circleSize = map(x1, 0, width, 50, 0);
  
  /* Circle */
  fill(kimDokja);
  ellipse(x1, 120, circleSize, circleSize);
  
  /* Yoo Joonghyuk Colors */
  let black = color(0, 0, 0);
  let gold = color(255, 215, 0);
  let joonghyuk = lerpColor(black, gold, x2/width);
  
  /* Grows Square */
  let squareSize = map(x2, 0, width, 50, 100);
  
  /* Square rotating and growing around Circle */
  push();
  translate(x2, 120);
  rotate(frameCount / 15);
  fill(joonghyuk);
  rect(0, 90, squareSize, squareSize);
  pop();
  
  /* Transparency opacity goes from 255 to 0 */
  let triangleTrans = map(x3, 0, width / 2, 255, 0);
  
  /* Triangle */
  fill(72, 28, 105, triangleTrans);
  triangle(x3, 270, x3 - 30, 320, x3 + 30, 320);
  
  /* Triangle morphs to Circle */
  let circleTrans = map(x3 / width, 0.5, 1, 0, 255);
  fill(72, 28, 105, circleTrans);
  ellipse(x3, 300, 50, 50);
  
  
}