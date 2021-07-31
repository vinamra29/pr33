var bg,bgImg
var girl,girlImg
var snow,snowImg
var box 
function preload (){
bgImg = loadImage("snow2.jpg")
girlImg = loadImage ("girl.png")
snowImg = loadImage ("snow4.webp") 

}
function setup(){
  createCanvas(windowWidth,windowHeight);
bg = createSprite (100,100,500,500)
bg.addImage(bgImg)
bg.scale = 2
box = createSprite (0,800,3000,50)
box.visible = false
girl = createSprite (1000,700,20,20)
girl.addImage (girlImg)
girl.scale = 0.5

}
function draw (){
  if(keyDown("space")&& girl.y >= 600) {
    girl.velocityY = -20;
  
}
girl.velocityY = girl.velocityY + 0.8
girl.collide(box)
  spawnSnow ()
drawSprites()

}
function spawnSnow(){
  if (frameCount%60==0){
  snow = createSprite(10,10,20,20)
  snow.x = Math.round(random(90,1200))
  snow.addImage(snowImg)
  snow.scale = 0.1
  snow.velocityY = 3
  }
}