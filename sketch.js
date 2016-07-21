
var diametro;
var diam = diametro;
diam = 100;
var ejeX;
var ejeY;
var x = ejeX;
var y = ejeY;
x= 500;
y = 500;

function setup() {
  var x = 2000;
  var y = 1000;
  createCanvas(x, y);
  background(255,0,0);
}

function draw() {
  background(255,0,0);
  
  /*diam = diam + 1;*/
  stroke(210, 0, 100);
  strokeWeight(10, 0, 100);
  fill(0,0,255);
  ellipse(mouseX,mouseY,diam,diam);
  
  estilo1();
 ellipse(x, y, 20, 20);

  
}

function estilo1(){
  strokeWeight(10);
  stroke(2,0,100);
  fill(0,255,0);
  
}
