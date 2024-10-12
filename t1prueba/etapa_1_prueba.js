//Variables
let imagenes = [];

let estados;


let x = 240;
let y = 300;
let w = 150;
let h = 40;

let xd = 240;
let wd = 150;
let hd = 40;
let yd = 360;

function preload(){
for (let i=0; i<2; i++) {
    imagenes[i] = loadImage("data/joel_ellie"+i+".jpg");
  }
}

function setup() {
createCanvas(640, 480);
}


function draw() {
background(200);
stroke(255);

if((mouseX > x) && (mouseX < x + w) && (mouseY > y) && (mouseY < y + h)){
fill(0, 0, 0, 170);
}else{
  noFill();
}
rect(x,y,w,h);

if((mouseX > xd) && (mouseX < xd + wd) && (mouseY > yd) && (mouseY < yd + hd)){
fill(0, 0, 0, 170);
}else{
  noFill();
}
rect(xd,yd,wd,hd);

fill(255);
textSize(20);
text("comenzar",271,325);
text("creditos",280,387);
push();
textSize(40);
text("The Last of Us",315,80);
pop();
}
