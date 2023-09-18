var mar, marImg
var navio, navioImg


function preload(){
  marImg = loadImage("sea.png")
  navioImg = loadAnimation("ship-1.png","ship-2.png", "ship-3.png", "ship-4.png")

}

function setup(){
  createCanvas(400,400);
   mar = createSprite(200,200)
   mar.addImage(marImg)
   mar.scale = 0.3

   navio = createSprite(200,195)
   navio.addAnimation("navegando", navioImg)
   navio.scale = 0.3

}

function draw() {
  background("blue");
    drawSprites();

 
}
