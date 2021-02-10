
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground=new Ground(400,680,800,20)
    stand=new Ground(450,200,400,20)
    B1=new Ball(340,300,"blue")
    B2=new Ball(390,300,"pink")
    B3=new Ball(440,300,"green")
    s1=new Sling(B1.body,{x:340,y:200})
    s2=new Sling(B2.body,{x:390,y:200})
    s3=new Sling(B3.body,{x:440,y:200})
	Engine.run(engine);
  
}


function draw() {
  
  background(0);
  Engine.update (engine)
  ground.display();
  stand.display();
  B1.display();
  B2.display();
  B3.display();
  s1.display();
  s2.display();
  s3.display();
  drawSprites();
 
}



