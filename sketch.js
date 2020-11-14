var wall,car;

function setup() {
  createCanvas(1200,1000);
  wall=createSprite(800,400,80,60);
 wall.shapeColor="green";
 wall.debug=true;
 car=createSprite(500,360,70,80);
 car.shapeColor="red";
car.debug=true;
}

function draw() {
  background(0); 
  car.x=World.mouseX;
   car.y=World.mouseY;
   console.log(car.x-wall.x);
   if(car.x-wall.x<car.width/2+wall.width/2 && wall.x-car.x<car.width/2+wall.width/2
    && car.y-wall.y<car.height/2+wall.height/2 && wall.y-car.y<car.height/2+wall.height/2){
    car.shapeColor="purple";
   textSize(30);
   fill("yellow");
    text("touched",200,200);
    
   }
   else{
   car.shapeColor="red";
   }
  drawSprites();
}