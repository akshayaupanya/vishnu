//const Engine = Matter.Engine;
//const World = Matter.World;
//const Bodies = Matter.Bodies;
//const Constraint = Matter.Constraint;
//var engine, world,ground;
var state = true;
function preload(){
  bg= loadImage("minbg.jpg")
  c = loadImage("Congratulation.jpg")
  button = loadImage("click.jpg")
  flower = loadImage("flower.gif")
  b = loadImage("background.gif")
  
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  //engine = Engine.create();
  //world = engine.world;
  ball = createSprite(width/2+20,height-140,10,10)
  ball.addImage(button);
  ball.scale = 0.3
 // ball.debug = true;
  ball.setCollider("rectangle",0,0,300,300)
}

function draw() {
  if( state === true){
 background(bg);
 //Engine.update(engine)
  textSize(40);
  fill("purple")
  textStyle(ITALIC)
  text("Congratulations Vishnu",width/2,height/2-190);
  fill("black");
  textSize(20);
  text("I feel very proud to have Vishnu as my student, he is very cleverish",width/2-80,height-450)
  text("and creative student. Successfully he achieved the game and app",width/2-80,height-410)
  text("creation certificate. Heartly congratulations Vishnu and I wish",width/2-80,height-370)
  text("you bright future ahead and explore more with the knowledge you",width/2-80,height-330)
  text("received fron the Whitehat.Jr platform.",width/2-80,height-290);
  text("I will be looking forward, you to come back soon and continue learning.",width/2-80,height-240)
  //image(c,width/2,height/2,100,100)
 // image(button,width/2,height-200,200,200);
 
 if (mousePressedOver(ball)){
   state=false;
   ball.visible=false;
 // background(flower);
 image(c,0,0,width,height)
 
  console.log("h")
 }
}
drawSprites();
}



