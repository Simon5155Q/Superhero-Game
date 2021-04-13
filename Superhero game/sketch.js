const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var box1, ground1, box2, box3, box4, box5, box6, box7, superhero1, chain, villain1, bg1;

function preload(){
    bg1 = loadImage("GamingBackground.png");
}
function setup(){
    canvas = createCanvas(windowWidth, windowHeight);
engine = Engine.create();
world = engine.world;

ground1 = new Ground(width/2, height - 10, width, 20);
box1 = new Box(800, 700, 50, 100, PI/2);
box2 = new Box(800, 600, 50, 100, PI/2);
box3 = new Box(740, 700, 50, 100, PI/2);
box4 = new Box(740, 600, 50, 100, PI/2);
box5 = new Box(740, 500, 50, 100, PI/2);
box6 = new Box(670, 600, 50, 100, PI/2);
box7 = new Box(670, 700, 50, 100, PI/2);
superhero1 = new Superhero(500, 100, 70, 70);
chain = new SlingShot(superhero1.body, {x: 500, y: 100});
villain1 = new Villain(1000, 600, 80, 80);
}

function draw(){
    background("black");
Engine.update(engine);

ground1.display();
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
superhero1.display();
chain.display();
villain1.display();
box7.display();
}

function mouseDragged(){
Matter.Body.setPosition(superhero1.body,{x: mouseX, y: mouseY});
}