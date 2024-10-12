let imagenes = [];
let estado = 0;  
let x = 240;
let y = 300;
let w = 150;
let h = 40;
let xd = 240;
let wd = 150;
let hd = 40;
let yd = 360;
let sonido;
let guion = [];

function preload() {
  for (let i = 0; i < 6; i++) {
    imagenes[i] = loadImage("data/imagen" + i + ".jpeg");  
  }

  // sonido = loadSound("data/sound.mp3"); 
  guion = loadStrings("data/guion.txt");  
}

function setup() {
  createCanvas(640, 480);
  // sonido.loop(); 
}

function draw() {
  background(200);
  stroke(255);
  
  image(imagenes[estado], 0, 0, width, height);
  fill(255);
  textSize(24);  
  textAlign(CENTER, CENTER);  
  text(guion[estado], width / 2, height / 2);  

  fill(255);
  textSize(20); 
  if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h) {
    fill(0, 0, 0, 170);
  } else {
    noFill();
  }
  rect(x, y, w, h);
  fill(255);
  textAlign(CENTER);  
  text("Siguiente", x + w / 2, y + h / 2);  
  if (mouseX > xd && mouseX < xd + wd && mouseY > yd && mouseY < yd + hd) {
    fill(0, 0, 0, 170);
  } else {
    noFill();
  }
  rect(xd, yd, wd, hd);
  text("Anterior", xd + wd / 2, yd + hd / 2); 
  push();
  textSize(40);
  textAlign(CENTER);
  text("The Last of Us", width / 2, 80);
  pop();
}

function mousePressed() {
  if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h) {
    if (estado < imagenes.length - 1) {
      estado++;  
    }
  }
  if (mouseX > xd && mouseX < xd + wd && mouseY > yd && mouseY < yd + hd) {
    if (estado > 0) {
      estado--; 
    }
  }
}
