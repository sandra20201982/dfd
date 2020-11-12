
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Render=Matter.Render;
var tree, treeImg, stone, stoneImg, ground, boy, boyImg;

function preload()
{
  boy=loadImage("boy.png")
}

function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;

  
  tree = new Tree(1050,340,450,500);
  ground = new Ground(width/2,600,width,20);
  stone = new Stone(235,420,30);


  mango1 = new Mango(1000,150,30);
	mango2 = new Mango(1170,130,30);
  mango3 = new Mango(1010,240,30);
  

	mango4 = new Mango(1390,300,30);
	mango5 = new Mango(1100,300,30);
	mango6 = new Mango(1200,300,30);
  mango7 = new Mango(1230,280,30);
  



  //checking objects in the backend

  var render=Render.create({
    element: document.body,
    engine:   engine,
    options: {
width : 1300,
height:  600,
wireframes: false
    }
  });

//	boy = new Boy(250,600);
	chain = new Chain(stone.body,{x:245, y:420});

 // Engine.run(engine);
  Render.run(render);
  
}


function draw() {
  rectMode(CENTER);
  background(500);

  background("cyan")
  Engine.update(engine);
  fill('red');
  textSize(24);
  text("PRESS SPACE TO GET A SECOND CHANCE TO PLAY", 200,200);
  ground.display();
  

  
 image(boy,200,340,200,300)
 stone.display();

 tree.display();

  mango1.display();
  mango2.display();
  mango3.display();


  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  chain.display();

  detectCollision(stone, mango1);
  detectCollision(stone, mango2);
  detectCollision(stone, mango3);
  detectCollision(stone, mango4);
  detectCollision(stone, mango5);
  detectCollision(stone, mango6);
  detectCollision(stone, mango7);


 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX, y:mouseY});
}
function mouseReleased(){
    chain.fly();
}
function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(stone.body,{x:160, y:500});
    chain.attach(stone.body);
  }
}

function detectCollision(lstone,lmango){
  stoneBodyPosition = lstone.body.position;
  mangoBodyPosition = lmango.body.position;

  var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
  if(distance <= lmango.r + lstone.r){
    Matter.Body.setStatic(lmango.body, false);
  }

}

