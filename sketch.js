const Engine = Matter.Engine,
      World = Matter.World,
      Events = Matter.Events,
      Bodies = Matter.Bodies; 

var player;

function setup() {
  createCanvas(displayWidth, displayHeight - 120);
  engine = Engine.create();
  world = engine.world;

  player = new Player(displayWidth/2, displayHeight/2, "black");
  
}

function draw() {
  background("white");  
  Engine.update(engine);

  
  player.display(); 
  drawSprites();
}