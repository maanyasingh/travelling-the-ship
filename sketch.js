


var sea , seabg,ship_image
function preload(){

seabg=loadImage("sea.png");
ship_image=loadImage("ship-1.png");
}

function setup(){
  createCanvas(400,400);
  sea=createSprite(200,200,300,300)
  sea.addImage(seabg);
ship=createSprite(100,300,2,2)
ship.addImage(ship_image)
ship.scale=0.2
sea.velocityX=-10


}



function draw() {
  background("blue");
 drawSprites()

}
