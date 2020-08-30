
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bob1,bob2,bob3,bob4
var rope1,rope2,rope3,rope4
var roof
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1=new Ball(200,200,30,30)
	bob2=new Ball(200,230,30,30)
	bob3=new Ball(200,260,30,30)
	bob4=new Ball(200,290,30,30)
	rope1=new Box(bob1.body,roof.body,-bobDiameter*2,0)
	rope2=new Box(bob2.body,roof.body,-bobDiameter*2,0)
	rope3=new Box(bob3.body,roof.body,-bobDiameter*2,0)
	rope4=new Box(bob4.body,roof.body,-bobDiameter*2,0)
	ground = Bodies.rectangle(width/2, 650,	 width, 10 , {isStatic:true} );
	World.add(world, ground)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display;
  bob1.display;
  bob2.display;
  bob3.display;
  bob4.display;
  rope1.display;
  rope2.display;
  rope3.display;
  rope4.display;
  roof.display
  drawSprites();
 
}



