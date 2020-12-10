
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1;
var ground;
var trashCanSide1 , trashCanSide2 , trashCanSide3;

function preload() {

}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create()
	world = engine.world;

	//Create the Bodies Here.

trashCanSide1 = new groundAndTrashCan(600,600,5,50);
trashCanSide2 = new groundAndTrashCan(700,600,5,50);
trashCanSide3 = new groundAndTrashCan(650,625,100,5);
ground = new groundAndTrashCan(width/2,650,width,5);
paper1 = new paper(200,600,10,10);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  Engine.update(engine);

  trashCanSide1.display();
  trashCanSide2.display();
  trashCanSide3.display();
  ground.display();
  paper1.display();

  drawSprites();
 
}



