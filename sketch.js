var bg, bgImg;
var ball, ballImg;
var stair, stairImg;
 var stairGroup;
var jumpSound;
var invisGround;
var finishTouch;
var youWinImg, youWin;

function preload(){
bgImg = loadImage("background.jpg");
ballImg = loadImage("realball.png");
stairImg = loadImage("stair.png");
jumpSound = loadSound("jumpSound.mp3");
youWinImg = loadImage("youWin.jpg");
}

function setup(){
createCanvas(windowWidth,windowHeight);

ball = createSprite(windowWidth/2,windowHeight-130,30,30);
ball.addImage(ballImg);
ball.scale = 0.3;
stairGroup = new Group();
invisGround = createSprite(900, 850, 1400, 10);
invisGround.visible = false;
finishTouch = createSprite(900, 80, 1400, 10);
finishTouch.visible = false;
youWin = createSprite(900, 400, 50, 50);
youWin.addImage(youWinImg);
youWin.visible = false;
}

function draw() {
  background(bgImg);
 
if (keyDown("space")) {
  ball.velocityY = -5;
 // jumpSound.play();
}

if (keyDown("RIGHT_ARROW")) {
  ball.x = ball.x + 3;
}

if (keyDown("LEFT_ARROW")) {
  ball.x = ball.x - 3;
}

if (ball.isTouching(stairGroup))  {
  ball.velocityY = 0;
}

if (ball.isTouching(finishTouch)){
ball.velocityY = 0;
youWin.visible = true;

}



ball.velocityY = ball.velocityY + 1;
ball.collide(invisGround);

spawnStairs();
drawSprites();
}


function spawnStairs() {
    if(frameCount%60 === 0) {
        stair = createSprite(400,350,80,20);
        stair.setCollider("rectangle", 0,77,80,5);
        stair.x = Math.round(random(100,windowWidth - 100));
        stair.y = Math.round(random(10,50));
        stair.addImage(stairImg);
        stair.velocityY = 3;
        stair.debug = false;
        stair.lifetime = 200;
        stairGroup.add(stair);
    }
}