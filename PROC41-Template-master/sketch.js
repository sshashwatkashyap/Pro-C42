const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var maxDrops = 1000;
var drop = [];
var bruce;

function preload(){
    
}

function setup(){

    var canvas = createCanvas(400, 600);   

    engine = Engine.create();
    world = engine.world;
    
    for(var i=0; i<maxDrops; i++){

        x = random(10, 380)
        y = 0

        //if(i % 2 ===  0){

            drop.push(new Drop(/*random(10, 380)*/x, y, 5, 5));

        //}
        
        console.log(x)
        console.log(y)

    }

    bruce = new Umbrella(200, 200);
    //bruce.debug = true;
    
}

function draw(){

    background(0);

    Engine.update(engine);

    for (var i = 0; i < maxDrops; i++) {
     
        //if(i % 2 ===  0){

        drop[i].display();

        drop[i].update();

        //}
            
    }

    bruce.display();
    
}   

