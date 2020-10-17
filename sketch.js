var ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13, box14,box15, box16, box17, slingShot1;
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15;
var stand1,stand2, ground;
var polygon_img;
var backgroundImg;
var bg ="bg.png"
var score=0;
function preload()
{
	polygon_img=loadImage("1545365732_Hexagon-2-dimensional-Shape copy.png");
	getBackgroundImg()
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
	
	//Create the Bodies Here.
	 
	//rock1=new rock(100,300,50)
	//chain=new slingshort(rock1.body,{x:235,y:420})

	
	box16 = new box(300,275,30,40);
	box1 = new box(330,275,30,40);
	box2 = new box(360,275,30,40);
	box3 = new box(390,275,30,40);
	box4 = new box(420,275,30,40);
	box5 = new box(450,275,30,40);
	box6 = new box(480,275,30,40);
	//level two
	box7 = new box(330,235,30,40);
	box8 = new box(360,235,30,40);
	box9 = new box(390,235,30,40);
	box10 = new box(420,235,30,40);
	box11= new box(450,235,30,40);
	//level three
	box12 = new box(360,195,30,40);
	box13 = new box(390,195,30,40);
	box14 = new box(420,195,30,40);
	//top
	box15= new box(390,155,30,40);
	   //botton 2
	 b1=new box(630,110,30,40);
	 b2=new box(660,110,30,40);
	 b3=new box(690,110,30,40);
	 b4=new box(720,110,30,40);
	 b5=new box(750,110,30,40);
	//second 2
	 b6=new box(660,70,30,40);
	 b7=new box(690,70,30,40);
	 b8=new box(720,70,30,40);
	 //top2
	 b9=new box(690,30,30,40);
	 
	//chain=new slingshort(ball1.body,{x:100,y:300})
	//groundSprite=createSprite(410, 270, 200, 20);
	//groundSprite.shapeColor=color("white")
	ball = Bodies.circle(50,200,50);
	World.add(world,ball);
	slingShot1 = new Slingshot(this.ball,{x:100,y:200});
	stand1 = new Stand(390,300,250,10)
	stand2 = new Stand(690,150,200,10)
	ground = new Ground();
	//ground = Bodies.rectangle(410, 270, 200, 20 , {isStatic:true,restitution:1} );
	//World.add(world, ground);
}


function draw() {
	
  rectMode(CENTER);
  if(backgroundImg)
	background(backgroundImg)
	noStroke();
	textSize(35)
	fill("orange")
	text("Score  " + score, width-900, 50)
	
	b1.score();
	b2.score();
	b3.score();
	b4.score();
	b5.score();
	b6.score();
	b7.score();
	b8.score();
	//b9.score();
 // background(0);
  //keyPressed()
  drawSprites();
  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();
  box8.score();
  box9.score();
  box10.score();
  box11.score();
  box12.score();
  box13.score();
  box14.score();
  box15.score();
  box16.score();
 
// rock1.display();
//chain.display();

 box1.display();

 box2.display();
 box3.display();
 box4.display();
 box5.display();
 box6.display();
 box7.display();
 box8.display();
 box9.display();
 box10.display();
 box11.display();
 box12.display();
 box13.display();
 box14.display();
 box15.display();
 box16.display();
 b1.display();
 b2.display();
 b3.display();
 b4.display();
 b5.display();
 b6.display();
 b7.display();
 b8.display();
 b9.display();
 stand1.display();
 stand2.display();
 slingShot1.display();
imageMode(CENTER);
 image(polygon_img ,ball.position.x,ball.position.y,80,40);
//polygonMode(RADIUS)
// polygon(ball.Position.x,ball.Position.y,6,20);
 ground.display();
 //box10.display();
 //box11.display();
 
}

function mouseDragged(){
	Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
  }
  function mouseReleased(){
	slingShot1.fly();
  }
  function keyPressed(){
    if(keyCode === 32){
	
		Matter.Body.setPosition(this.ball,{x:100,y:200}) ;
		slingShot1.attach(ball.body);
		
    }
}

async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=06 && hour<=19){
        bg = "bg.png";
    }
    else{
        bg = "bg2.jpg";
    }

    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
}