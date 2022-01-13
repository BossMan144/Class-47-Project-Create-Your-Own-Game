var bgImg
var flyingDinoImg, deadDinoImg;
var eggImg, bulletImg;
var cloud1, cloud2, cloud3, cloud4, cloud5, cloud;
var planeImg; 
var lifebar1, lifebar2, lifebar3; 
var bullet1;

var invisCeling;
var score;


function preload() {
bgImg = loadImage("Assets/Sky.jpg");
flyingDinoImg = loadAnimation("Assets/dino3.png", "Assets/dino3.png", "Assets/dino2.png", "Assets/dino2.png", "Assets/dino1.png", "Assets/dino1.png", "Assets/dino5.png", "Assets/dino5.png", "Assets/dino6.png", "Assets/dino6.png");
//deadDinoImg = loadImage("Assets/.png");
eggImg = loadImage("Assets/Fossil_Egg.png");
bulletImg = loadImage("Assets/Bullet.png");
planeImg = loadImage("Assets/Plane.png");
lifebar1 = loadImage("Assets/lifebar1.png");
lifebar2 = loadImage("Assets/lifebar2.png");
lifebar3 = loadImage("Assets/lifebar3.png");
cloud1 = loadImage("Assets/Cloud1.png");
cloud2 = loadImage("Assets/Cloud2.png");
cloud3 = loadImage("Assets/Cloud3.png");
cloud4 = loadImage("Assets/Cloud4.png");
cloud5 = loadImage("Assets/Cloud5.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  invisCeling = createSprite(960, windowHeight-940, windowWidth, 10);
  invisCeling.visible = false;
  flyingDino = createSprite(windowWidth - 850, windowHeight - 500, 100,100);
  flyingDino.addAnimation("flying", flyingDinoImg);
  flyingDino.debug = true;

  plane1 = createSprite(windowWidth -1700, windowHeight - 500, 100,100);
  plane1.addImage(planeImg);
  plane1.scale = 0.65;
  plane1.debug = true;

  plane2 = createSprite(windowWidth -1700, windowHeight - 200, 100,100);
  plane2.addImage(planeImg);
  plane2.scale = 0.65;
  plane2.debug = true; 
}

function draw() {
  background(bgImg);  
  if(keyDown("UP_ARROW")){
   flyingDino.velocityY = -10;
  }
  flyingDino.velocityY = flyingDino.velocityY+0.37;
  if(keyDown("DOWN_ARROW")){
    flyingDino.velocityY = 10;
   }

  flyingDino.collide(invisCeling);

  plane2.y = flyingDino.y;
  plane2.depth = plane1.depth;
  plane2.depth = plane2.depth+1;

  spawnClouds();
  spawnEggs();
  spawnBullets1();
  drawSprites();
}

function spawnClouds(){
  if(frameCount%60 === 0){
    var randNum = Math.round(random(50,1100))
    var cloud = createSprite(windowWidth - 300, randNum, 100,100);
    var rand = Math.round(random(1,5));
    switch(rand){
      case 1: cloud.addImage(cloud1);
      break;

      case 2: cloud.addImage(cloud2);
      break;

      case 3: cloud.addImage(cloud3);
      break;

      case 4: cloud.addImage(cloud4);
      break;

      case 5: cloud.addImage(cloud5);
      break;
  
    }
    cloud.velocityX = -10;
    cloud.scale = 2;
    flyingDino.depth = cloud.depth
    flyingDino.depth = flyingDino.depth+1 

    cloud.debug = true;

    plane1.depth = cloud.depth
    plane1.depth = plane1.depth+1
  }
} 

function spawnEggs(){
  if(frameCount%100 === 0){
    var randNum = Math.round(random(50,900))
    var egg = createSprite(windowWidth - 300, randNum, 100,100);
    egg.addImage(eggImg);
    egg.velocityX = -10;
    egg.scale = 0.25;
    flyingDino.depth = egg.depth
    flyingDino.depth = flyingDino.depth+1 

    plane1.depth = egg.depth
    plane1.depth = plane1.depth+1 
  }
} 

function spawnBullets1(){
  if(frameCount%100 === 0){
    var bullet1 = createSprite(windowWidth -1600, windowHeight - 450, 50,50);
    bullet1.addImage(bulletImg);
    bullet1.velocityX = 5;
    bullet1.scale = 0.75;
    //cloud.depth = bullet1.depth
    //bullet1.depth = bullet1.depth+1 

    bullet1.debug = true;

    plane1.depth = bullet1.depth
    plane1.depth = plane1.depth+1 
  }
}