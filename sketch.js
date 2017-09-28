function setup() {
  createCanvas(800,600);
 
}

function draw() {
background(255,255,40);
stroke(1)

//legs
fill(0,255,255);
ellipse(275,400,100,100);

//neck
strokeWeight(3);
line(200,50,300,90);
line(300,90,400,60);
line(300,90,300,20);
line(300,200,300,50);
strokeWeight(5);
line(270,200,270,100);
line(330,200,330,100);

//head
strokeWeight(1);
fill(0,255,255);
ellipse(300,100,100,100);
fill(0,0,0);
ellipse(300,100,30,30);
fill(125,125,125);
ellipse(270,110,16,16);
ellipse(330,120,15,15);
ellipse(305,70,15,15);
fill(0,255,255);
ellipse(300,100,10,10);

//legs
fill(0,255,255);
ellipse(275,400,100,100);

//body
fill(0,20,24);
rect(200,200,150,200);
fill(0,255,255);
rect(200,300,150,10);


}