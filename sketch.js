const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var score = 0;

function setup(){
    var canvas = createCanvas(1200, 800);
    engine = Engine.create();
    world = engine.world;  
    
    box1 = new Box(330, 345, 30, 40);
    box2 = new Box(360, 345, 30, 40);
    box3 = new Box(390, 345, 30, 40);
    box4 = new Box(420, 345, 30, 40);
    box5 = new Box(450, 345, 30, 40);
    box6 = new Box(360, 305, 30, 40);
    box7 = new Box(390, 305, 30, 40);
    box8 = new Box(420, 305, 30, 40);
    box9 = new Box(390, 265, 30, 40);

    ground = new Ground(600, 380, 1200, 20);

    polygon = new Polygon(100, 370, 30, 30);

    chain = new SlingShot(polygon.body, {x: 100, y: 200});
}

function draw(){
    background(0);

    textSize(20);
    text("Score: " + score, 1110, 30);

    Engine.update(engine);

    box1.display();
    box1.score();

    box2.display();
    box2.score();

    box3.display();
    box3.score();

    box4.display();
    box4.score();

    box5.display();
    box5.score();
    
    box6.display();
    box6.score();

    box7.display();
    box7.score();

    box8.display();
    box8.score();

    box9.display();
    box9.score();

    ground.display();

    chain.display();

    polygon.display();
}

function mouseDragged(){
        Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
    }

function mouseReleased(){
    chain.fly();
}