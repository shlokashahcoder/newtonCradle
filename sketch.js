
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var roof;
var rope1,rope2,rope3,rope4,rope5;
var bobDiameter

function preload()
{
	
}

function setup() {
   createCanvas(800, 700);   
  

   rectMode(CENTER)

	engine = Engine.create();
	world = engine.world;

   bobDiameter = 5
	roof = new Roof(395,50,700,40)
	bobObject1 = new Bob(90,250,50)
	bobObject2 = new Bob(bobObject1.x+bobObject1.r,250,50)
	bobObject3 = new Bob(bobObject2.x+bobObject1.r,250,50)
	bobObject4 = new Bob(bobObject3.x+bobObject1.r,250,50)
	bobObject5 = new Bob(bobObject4.x+bobObject1.r,250,50)
	rope1 = new Rope(bobObject1.body,roof.body,-bobDiameter*2,0) 
	rope2 = new Rope(bobObject2.body,roof.body,-bobDiameter*2,0) 
	rope3 = new Rope(bobObject3.body,roof.body,-bobDiameter*2,0) 
	rope4 = new Rope(bobObject4.body,roof.body,-bobDiameter*2,0) 
	rope5 = new Rope(bobObject5.body,roof.body,-bobDiameter*2,0) 
//   rope = new Rope(bobObject1.body,roof.body)
   World.add(world,rope1)
   World.add(world,rope2)
   World.add(world,rope3)
   World.add(world,rope4)
   World.add(world,rope5)
}


function draw() {
  rectMode(CENTER);
  background("white");

  roof.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  drawSprites();
 
}



