const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine, world;
var particles =[];
var plinkos=[];

var  division=[];
var  divisionHeight=300

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
    world = engine.world;
  for(var k=0;k<=width;k=k+80){
division.push( new Division (k,height-divisionHeight/2,10,divisionHeight))
 }

 

for(var j=40;j<width;j=j+50){
  plinkos.push(new Plinko(j,75))

}
for(var j=40;j<width;j=j+50){
  plinkos.push(new Plinko(j,150))

}
for(var j=40;j<width;j=j+50){
  plinkos.push(new Plinko(j,250))

}
for(var j=40;j<width;j=j+50){
  plinkos.push(new Plinko(j,350))

}
for(var j=40;j<width;j=j+50){
  plinkos.push(new Plinko(j,450))

}

}

function draw() {
  
  Engine.update(engine);
  background(0);  
  for(var k=0;k<division.length;k++) {
    division[k]. display ()}
  
   for(var j =0;j<plinkos.length;j++){
   plinkos[j].display();

   }
   if(frameCount%20===0){
    particles.push(new Particle(random(width/2-10,width/2+10),0))
    
  }
   for(var j =0;j<particles.length;j++){
    particles[j].display();
 
    } 
}