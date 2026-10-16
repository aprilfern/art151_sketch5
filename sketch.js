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

function setup(){
  createCanvas(400, 400);
  bgColor = color(78, 84, 115);
  rectMode(CENTER);
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
  
  noStroke();
  
  /* Kim Dokja colors */
  let white = color(255, 255, 255);
  let red = color(112, 20, 20);
  let kimDokja = lerpColor(white, red, x1/width);
  
  /* Circle */
  fill(kimDokja);
  ellipse(x1, 90, 50, 50);
  
  /* Yoo Joonghyuk Colors */
  let black = color(0, 0, 0);
  let gold = color(255, 215, 0);
  let joonghyuk = lerpColor(black, gold, x2/width);
  
  /* Square */
  fill(joonghyuk);
  rect(x2, 190, 50, 50);
  
  /* Han Sooyoung Colors */
  let lightPurple = color(201, 174, 212);
  let darkPurple = color(72, 28, 105);
  let sooyoung = lerpColor(lightPurple, darkPurple, x3/width);
  
  /* Triangle */
  fill(sooyoung);
  triangle(x3, 270, x3 - 30, 320, x3 + 30, 320);
  
}