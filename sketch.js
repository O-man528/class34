const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;

var engine, world;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
ground=new Ground(600,500,900,40);
ball=new Ball(245,390,60);
rope=new SlingShot(ball.body,{x:240,y:290});
box1=new Box(500,450,80,80);
box2=new Box(590,450,80,80);
box3=new Box(680,450,80,80);
box4=new Box(545,345,80,80);
}

function draw(){
    background("lightBlue");
    Engine.update(engine);
    text(mouseX+","+mouseY,mouseX,mouseY);
  ground.display();
  ball.display();
  rope.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
}
function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
    //}
}


function mouseReleased(){
    rope.fly();
    //gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
Matter.Body.setPosition(ball.body,{x:240,y:290});
       rope.attach(ball.body);
    }
}