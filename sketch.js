var part1,part2,part3;
var ball;
function setup(){
createCanvas(600,400);
part1=createSprite(100,200,200,400);
part2=createSprite(300,200,200,400);
part3=createSprite(500,200,200,400);
ball=createSprite(300,200,20,20);
}


function draw(){
background(0,0,0);
ball.shapeColor="white";
part1.shapeColor="black";
part2.shapeColor="black";
part3.shapeColor="black";
ball.x=World.mouseX;
ball.y=World.mouseY;

if(ball.isTouching(part1)){
  part1.shapeColor="red";
  part2.shapeColor="black";
  part3.shapeColor="black";
}

if(ball.isTouching(part2)){
  part1.shapeColor="black";
  part2.shapeColor="green";
  part3.shapeColor="black";
  ball.shapeColor="white";
}

if(ball.isTouching(part3)){
  part1.shapeColor="black";
  part2.shapeColor="black";
  part3.shapeColor="blue";
}


drawSprites();
}