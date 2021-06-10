
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;
var angle=60;
var poly;
var fighterImg;
var fighter;
var up, upImage;
var down ,downImage;
var block1 ,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15;
var block16,block17,block18,block19,block20,block21,block22,block23,block24,block25,block26,block27,block28,block29,block30;
var block31,block32,block33,block34,block35,block36,block37,block38,block39,block40,block41,block42,block43,block44,block45;
var block46,block47,block48,block49,block50,block51,block52,block53,block54;

function preload(){

   fighterImg=loadImage("happy2-removebg-preview.png");
   upImage=loadImage("up.png");
   downImage=loadImage("down.png");
}

function setup() {
  createCanvas(800,800);

  engine = Engine.create();
  world = engine.world;
  
   fighter=createSprite(15,400,20,20);
   fighter.addImage(fighterImg);
   fighter.scale=0.15;
  
   
    
  block1=createSprite(5,180,10,350);
  

  block2=createSprite(5,610,10,350);
  
  block3=createSprite(80,350,150,10);
  block4=createSprite(80,440,150,10);
  block5=createSprite(400,790,800,10);
  block6=createSprite(400,10,800,10);
  block7=createSprite(50,170,80,10);
  block8=createSprite(155,470,10,70);
  block9=createSprite(155,150,10,150);
  block10=createSprite(130,70,60,10);
  block11=createSprite(120,230,80,10);
  block12=createSprite(80,255,10,60);
  block13=createSprite(185,290,220,10);
  block14=createSprite(230,340,10,90);
  block15=createSprite(290,340,10,90);
  block16=createSprite(290,510,10,110);
  block17=createSprite(185,570,220,10);
  block18=createSprite(80,650,10,150);
  block19=createSprite(107,720,65,10);
  block20=createSprite(143,685,10,80);
  block21=createSprite(275,650,270,10);
  block22=createSprite(210,750,10,90);
  block23=createSprite(280,700,10,90);
  block24=createSprite(350,750,10,90);
  block25=createSprite(415,690,10,90);
  block26=createSprite(360,450,150,10);
  block27=createSprite(330,390,90,10);
  block28=createSprite(440,390,10,240);
  block29=createSprite(400,325,90,10);
  block30=createSprite(400,510,90,10);
  block31=createSprite(425,270,140,10);
  block32=createSprite(360,200,10,150);
  block33=createSprite(257,130,197,10);
  block34=createSprite(330,70,180,10);
  block35=createSprite(425,140,10,150);
  block36=createSprite(490,250,10,50);
  block37=createSprite(585,230,180,10);
  block38=createSprite(525,130,10,50);
  block39=createSprite(480,100,100,10);
  block40=createSprite(595,65,10,100);
  block41=createSprite(670,180,10,100);
  block42=createSprite(460,730,90,10);
  block43=createSprite(500,690,10,90);
  block44=createSprite(580,650,10,160);
  block45=createSprite(580,570,90,10);
  block46=createSprite(625,515,160,10);
  block47=createSprite(615,350,120,10);
  block48=createSprite(550,420,10,195);
  block49=createSprite(680,385,10,140);
  block50=createSprite(740,450,120,10);
  block51=createSprite(640,730,130,10);
  block52=createSprite(700,625,10,210);
  block53=createSprite(795,235,10,440);
  block54=createSprite(795,610,10,350);
  block55=createSprite(740,320,120,10);
}


function draw() 
{
  background("black");
  Engine.update(engine);
  
  

 


  drawSprites();
}

