var ground;

var monkey, monkeyRunning;

var bananaImage, foodGroup;
var obstacleImage, obstacleGroup;

var startTime = new Date(), survivalTime = 0;

var regulationTime;

function preload() {
  monkeyRunning = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
}

function setup() {
  createCanvas(600, 600);
  
  monkey = createSprite(100, 510);
  monkey.addAnimation("monkeyRunning", monkeyRunning);
  monkey.scale = 0.1;
  
  ground = createSprite(300, 570, 600, 60);
  ground.x = ground.width/2;
}

function draw() {
  background("white");
  
  ground.velocityX = -5;
  
  if (ground.x < 0) {
    ground.x = ground.width/2;
  }
  
  if (keyDown("space") && monkey.y > 509) {
    monkey.velocityY = -13;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  
  monkey.collide(ground);
  
  bananas();
  obstacles();
  
  survivalTime = new Date() - startTime;
  
  textAlign(RIGHT, TOP);
  textSize(15);
  text("Survival Time: " + (survivalTime/1000).toFixed(1), 590, 10);
  
  drawSprites();
}

function bananas() {
  if (frameCount % 80 === 0) {
    banana = createSprite(610, Math.round(random(509, 400)));
    banana.addImage(bananaImage);
    banana.scale = 0.075;
    banana.velocityX = -5;
    banana.lifetime = 130;
  }
}

function obstacles() {
  if (frameCount % 300 === 0) {
    obstacle = createSprite(620, 515);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.14;
    obstacle.velocityX = -5;
  }
}