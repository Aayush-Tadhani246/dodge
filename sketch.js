const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var rocks

function preload(){
  bg = loadImage("Images/bg.png")
  pI = loadImage("Images/costume1.svg")
 
}

function setup() {
  createCanvas(1000,600);
  engine = Engine.create();
  world = engine.world;
  player = createSprite(500, 525,50,50)
  player.addImage(pI)
  player.scale = 0.50
  fill("brown")
  ground = new Ground(500,600,1000,10)
  rocks = new Rocks(random(100,900),0,50,50)
 
}

function draw() {
  background(bg); 
  
  Engine.update(engine); 
  ground.display();
  rocks.display();
  if(keyDown(RIGHT_ARROW)){
    if(player.x <900){
    player.x = player.x + 10
    }
  }
  if(keyDown(LEFT_ARROW)){
    if(player.x > 100){
    player.x = player.x - 10
    }
  }
  console.log(player.x)
  drawSprites()
}