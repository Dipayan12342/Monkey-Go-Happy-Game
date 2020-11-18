var back;
var monkey , Monkey,monkey_running; 
var banana ,bananaImage, obstacle, obstacleImage;
var score=0;
var ground;
var invible_ground;
var survivalTime=0;

function preload(){
  Monkey = loadAnimation("sprite_0.png");
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
createCanvas(670,300);
  
background("cyan");
  
back = createSprite  (200,200,1000,900);
back.shapeColor="cyan";
back.depth = -100;
  
monkey = createSprite(130,200,200,100);
monkey.addAnimation("bonu",monkey_running);
monkey.scale = 0.13;  
monkey.depth=100;
  
ground = createSprite(335,320,1350,200);
ground.shapeColor="lightbrown";
ground.depth= -50;

  
invisible_ground = createSprite(400,243,800,10);
invisible_ground.visible = false;
  
FoodGroup = new Group();
obstacleGroup = new Group();
  monkey.setCollider("rectangle",0,0,monkey.width,monkey.height);

 // monkey.debug=true; 
}

function draw() {
console.log(monkey.y);
 if(keyDown("space")&& monkey.y >= 197) {
     monkey.velocityY = -16;
   monkey.changeAnimation(Monkey);
}
monkey.velocityY = monkey.velocityY + 1;
monkey.collide(invisible_ground);

if(FoodGroup.isTouching(monkey)){
    FoodGroup.destroyEach();
  score=score+10;

}

  spawnSand();
  spawnStones();
  spawnBanana();
drawSprites()
stroke("black")  ;
textSize(20);  
text("Score: "+score,550,30);
  
stroke("red");
textSize(24);
survivalTime=Math.ceil(frameCount/frameRate())  ;
text("Survival Time: "+survivalTime+"s",100,50) ; 
}
function spawnSand(){
  if(frameCount%50===0){
var sand = createSprite(700,random(230,290),30 ,1);
    sand.velocityX=-7;
    sand.shapeColor = "brown";
  } 
}
function spawnStones(){
if (frameCount%280===0)  {
obstacles=createSprite(684,205,20,20)  ;
  obstacles.addImage (obstacleImage);
  obstacles.scale = 0.15;
  obstacles.velocityX = -7  ;  
  obstacleGroup.add(obstacles);
}
}
function spawnBanana(){
if (frameCount%80===0)  {
fruit=createSprite(684,random(90,150)   ,20,20)  ;
  fruit.addImage (bananaImage);
  fruit.scale = 0.1;
  fruit.velocityX = -7  ;  
  FoodGroup.add(fruit);
}
}

