class Drop {
    constructor(x, y,r) {

        var options ={

            //restitution:0.4
        
        }
        
        this.r=r;
      
        this.body = Bodies.rectangle(x, y, 5, 5,options);       
        //this.color=color(random(0, 255), random(0, 255), random(0, 255));
        World.add(world, this.body);

    }

    update(){

        if(this.body.position.y>=600)
        Matter.Body.setPosition(this.body, {x: random(10, 380), y: 0})

    }
    display() {

        var pos = this.body.position;
        
        this.body.velocityX = 5;

        fill("blue")
        ellipseMode(RADIUS);
        ellipse(pos.x, pos.y, 5, 5);
        
    }

};