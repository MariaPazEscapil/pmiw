//Comisión 5, docente: Tobías Albirosa, alumna: María Paz Escapil, legajo:119017/2

// variables
let cant = 50;
let tam = 16;
let tamElipse = 6;
let tamElipse2 = 5;
let tamRect = 16;
let tamRect2 = 19;

let colorRect1;
let colorRect2;
let colorElipse1;
let colorElipse2;

let colorOrgRect1;
let colorOrgRect2;

function preload(){
referencia = loadImage("data/opart.jpg");
}

function setup() {
  createCanvas(800, 400);
 colorMode(HSB);
   colorRect1 = color(195, 87, 55);
  colorRect2 = color(150, 75, 80);
  colorElipse1 = color(150, 140, 80);
  colorElipse2 = color(0, 0, 255);
  
  colorOrgRect1 = colorRect1;
   colorOrgRect2 = colorRect2;
}

function draw() {
  background(200);
  image(referencia, 0, 0,400,400);
noStroke();

 primeraCuadricula();
  segundaCuadricula();
  
   fill(80);
  ellipse(width - 40, 40, 20, 20 );  
}

function primeraCuadricula(){
  for (let x = 25; x < 50; x ++) {
    for (let y = 0; y < 50; y ++) {
      fill(colorOriginal(x, y));
      rect(x * tam, y * tam, tamRect, tam);
       if ((x + y) % 3 == 2) {
        fill(200,80,30);
      } else {
        fill(255);
      }
      ellipse(x * tam, y * tam, tamElipse2, tamElipse2);
    }
  }
}

function segundaCuadricula(){
 for (let a = 24; a < 39; a ++) {
    for (let b = 3; b < 18; b ++){
       fill(colorOriginal(a, b));
       rect(a * 19, b * 19, tamRect2, tamRect2);
     
       if ((a + b) % 3 == 2) {
        fill(200,80,30);
      } else {
        fill(255);
      }
      ellipse(a * 19, b * 19, tamElipse, tamElipse);
 }
  }
}
function keyPressed() {

  if (key == 'w') {
    tamElipse += 1;
    tamElipse2 += 1;
  } else if (key == 's') {
    tamElipse = max(1, tamElipse - 1);
    tamElipse2 = max(1, tamElipse2 - 1);
  }
}

function valorOriginal() {
  tamElipse = 6;
  tamElipse2 = 5;
}

function mousePressed() {
let d = dist(mouseX, mouseY, width - 40, 40);
  if (d < 15) {
    valorOriginal();
    colorRect1 = colorOrgRect1;
    colorRect2 = colorOrgRect2;
  } else {
    colorRect1 = color(100, mouseY, 100);
    colorRect2 = color(mouseY, 100, 100);
  }
}

function colorOriginal(i, j) {
  if (i % 2 === 0 && j % 2 !== 0 || i % 2 !== 0 && j % 2 === 0) {
    return colorRect1;
  } else {
    return colorRect2;
  }
}
