
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;

var box1,box2,box3;
var img;

var ball;

function preload(){
	img = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(600,400);


	engine = Engine.create();
	world = engine.world;


	//Create the Bodies Here.

	ground = new Ground(0,350,600,10);

	box1 = new Box(350,310,10,75);
	box2 = new Box(380,345,50,10);
	box3 = new Box(410,310,10,75);


	ball = new Ball(100,340,20);
  
}


function draw() {
	Engine.update(engine);

	background(200);

	

	ground.display();
	
	box1.display();
	box2.display();
	box3.display();

	ball.display();

	image(img,341,271,79,84);
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.bodies,ball.bodies.position,{x:12,y:-22});
	}
}