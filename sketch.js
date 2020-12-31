var fixedRect, movingRect;
var jatinRect,dilpreetRect;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
jatinRect=createSprite(200,700,50,70)
jatinRect.shapeColor = "green";
jatinRect.debug = true;

dilpreetRect=createSprite(800,700,50,70)
dilpreetRect.shapeColor = "green";
dilpreetRect.debug = true;




}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

 if( isTouching(movingRect,dilpreetRect)){
  movingRect.shapeColor = "red";
  dilpreetRect.shapeColor = "red";
 }

   else if( isTouching(movingRect,jatinRect)){
    movingRect.shapeColor = "red";
    jatinRect.shapeColor = "red";
   }
 
 else{
  movingRect.shapeColor = "green";
  dilpreetRect.shapeColor = "green";
  jatinRect.shapeColor = "green";
 }

  drawSprites();
}

function isTouching(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object2.width/2
    && object2.x - object1.x < object2.width/2 + object2.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 +object1.height/2) {

      return true;
}
else {
  return false;
}
}


