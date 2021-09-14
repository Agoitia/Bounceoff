var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
  objeto1 = createSprite(100, 100, 50, 50);
  objeto2 = createSprite(300, 100, 50, 50);
}

function draw() {
  background(0,0,0);  

  bounceoff(movingRect, fixedRect);
  drawSprites();
}

function bounceoff(){

  if (objeto1.x - objeto2.x < objeto2.width/2 + objeto1.width/2
    && objeto2.x - objeto1.x < objeto2.width/2 + objeto1.width/2) {
      objeto1.velocityX = objeto1.velocityX * (-1);
      objeto2.velocityX = objeto2.velocityX * (-1);
}
if (objeto1.y - objeto2.y < objeto2.height/2 + objeto1.height/2
  && objeto2.y - objeto1.y < objeto2.height/2 + objeto1.height/2){
    objeto1.velocityY = objeto1.velocityY * (-1);
    objeto2.velocityY = objeto2.velocityY * (-1);
}
}