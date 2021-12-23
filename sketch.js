var pc, pcimg;
var npc, npcimg;
var bg, bgimg;
var stricker, strickerimg;



function preload(){
  pcimg=loadImage("PC.png")
  npcimg=loadImage("Npc.png")
  bgimg=loadImage("Background.png")
  strickerimg=loadImage("shuttle.png")
}
function setup() {
  createCanvas(600,400);

  bg=createSprite(300,200,600,400);
  bg.addImage(bgimg);
  bg.scale=4
  pc=createSprite(300,350,20,20);
  pc.addImage(pcimg);
  pc.scale=0.6
  npc=createSprite(300,50,20,20);
  npc.addImage(npcimg);
  npc.scale=0.6
  stricker=createSprite(300,200,20,20);
  stricker.addImage(strickerimg);
  stricker.scale=0.3
}

function draw() {
  background(0);  
  if(keyDown(UP_ARROW)&& pc.y>200){
    pc.y=pc.y-5;
  }
  if(keyDown(DOWN_ARROW)&& pc.y<350){
    pc.y=pc.y+5;
  }
  if(keyDown(RIGHT_ARROW)&& pc.x<450){
    pc.x=pc.x+5;
  }
  if(keyDown(LEFT_ARROW)&& pc.x>150){
    pc.x=pc.x-5;
  }
  if(keyDown("space")){
    stricker.velocityY=3
  }
  stricker.bounceOff(pc);
  stricker.bounceOff(npc);
  drawSprites();
}