const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world;

var block1,block2,block3,block4,block5,block6,block7;
var box1,box2,box3,box4,box5;
var cube1,cube2,cube3;
var square1;

var solid1,solid2,solid3,solid4,solid5;
var rock1,rock2,rock3;
var tower1;

var base1,base2;

var ground;

var Score = 0;

function preload(){
  polygonImg = loadImage("polygonimage.png")
}

function setup() {
	var canvas = createCanvas(1000, 700);

	engine = Engine.create();
	world = engine.world;
  ground = new Ground(width/2, 680, 1000, 20);
  fill(0)
	block1 = new Block(400,400,20,20);
	block2 = new Block(410,400,20,20);
	block3 = new Block(420,400,20,20);
	block4 = new Block(430,400,20,20);
	block5 = new Block(440,400,20,20);
	block6 = new Block(450,400,20,20);
	block7 = new Block(460,400,20,20);

	box1 = new Block(410,390,20,20);
	box2 = new Block(420,390,20,20);
	box3 = new Block(430,390,20,20);
	box4 = new Block(440,390,20,20);
	box5 = new Block(450,390,20,20);

	cube1 = new Block(420,380,20,20);
	cube2 = new Block(430,380,20,20);
	cube3 = new Block(440,380,20,20);

	square1 = new Block(430,370,20,20);

	solid1 = new Block(600,200,20,20);
	solid2 = new Block(610,200,20,20);
	solid3 = new Block(620,200,20,20);
	solid4 = new Block(630,200,20,20);
	solid5 = new Block(640,200,20,20);

	rock1 = new Block(610,190,20,20);
	rock2 = new Block(620,190,20,20);
	rock3 = new Block(630,190,20,20);

	tower1 = new Block(620,180,20,20);

	base1 = new Ground(425,420,200,20);
  base2 = new Ground(625,230,200,20);

  ball = Bodies.circle(50,200,20);
  World.add(world,ball);
  
  slingshot = new Slingshot(this.ball,{x:200,y:100});

   //ground = new Ground(500,500,100,0);
  
}

function draw() {
 // rectMode(CENTER);
  background(0);
  noStroke();
  textSize(30);
  fill("white");
  text("Score : "+Score,200,100);

  Engine.update(engine);
  //text(mouseX+ "," +mouseY, mouseX, mouseY);
  //fill("blue");
  
  block1.display();
  block1.score();
  block2.display();
  block2.score();
  block3.display();
  block3.score();
  block4.display();
  block4.score();
  block5.display();
  block5.score();
  block6.display();
  block6.score();
  block7.display();
  block7.score();

  box1.display();
  box1.score();
  box2.display();
  box2.score();
  box3.display();
  box3.score();
  box4.display();
  box4.score();
  box5.display();
  box5.score();

  cube1.display();
  cube1.score();
  cube2.display();
  cube2.score();
  cube3.display();
  cube3.score();
  
  square1.display();
  square1.score();
  
  solid1.display();
  solid2.display();
  solid3.display();
  solid4.display();
  solid5.display();

  rock1.display();
  rock1.score();
  rock2.display();
  rock2.score();
  rock3.display();
  rock3.score();

  tower1.display();
  tower1.score();

  ground.display();
  base1.display();
  base2.display();

  imageMode(CENTER);
  image(polygonImg,ball.position.x,ball.position.y,40,40);
  slingshot.display();
}

function mouseDragged(){
    Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY})
    
}

function mouseReleased (){
   slingshot.fly()
}

function keyPressed (){
  if(keyCode === 32){
    slingshot.attach(this.ball);
    //Matter.Body.setPosition(ball.body,{x:200,y:50})
  }
}
