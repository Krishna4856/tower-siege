const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;

var engine,world;
var b1,b2,b3;
var slingShoot,polygon;

function setup(){
    var canvas=createCanvas(1000,800);
    engine = Engine.create();
    world = engine.world;

    b1=new Box(100,100,50,50);
    b2=new Box(150,150,50,50);
}
function draw(){
    background("black");
    Engine.update(engine);
    b1.display();
    b2.display();
}
