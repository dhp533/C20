
var fixedRect, movingRect;
var rect1, rect2

function setup() {
  createCanvas(800,400);

  fixedRect = createSprite(400, 200, 50, 50);
  fixedRect.shapeColor = "yellow";
  movingRect = createSprite(500, 200, 60, 50);
  movingRect.shapeColor = "blue";

  rect1 = createSprite(100, 100, 50, 50);
  rect1.shapeColor = "red";
  rect1.velocityX = 3;
  rect2 = createSprite(400, 100, 60, 50);
  rect2.shapeColor = "green";
}

function draw() {
  background(220,255,255);  

  movingRect.x = mouseX;
  movingRect.y = mouseY;

  console.log("Distance b/w rect " + (movingRect.x - fixedRect.x ));

  console.log("Half of Width " + (movingRect.width + fixedRect.width )/2);

  if( (movingRect.x - fixedRect.x )<=(movingRect.width + fixedRect.width )/2
      && (fixedRect.x - movingRect.x  )<=(movingRect.width + fixedRect.width )/2
      && (movingRect.y - fixedRect.y )<=(movingRect.height + fixedRect.height )/2
      && (movingRect.y - fixedRect.y )<=(movingRect.height + fixedRect.height )/2)
  {
    fixedRect.shapeColor = "red"
  }
  else
  {
    fixedRect.shapeColor = "yellow";
  }
  
  if( (rect1.x - rect2.x )<=(rect1.width + rect2.width )/2
      && (rect2.x - rect1.x  )<=(rect1.width + rect2.width )/2)
  {
    rect1.velocityX = -1*rect1.velocityX;
  }


  drawSprites();
}