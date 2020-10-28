class Box{
    constructor(x,y,lenght,height){

        var options = {
            isStatic:true,
        }

        this.bodies = Bodies.rectangle(x,y,lenght,height,options);
        this.l = lenght;
        this.h = height;
        World.add(world,this.bodies);

    }
    display(){
        var pos = this.bodies.position;
        
        push();
        translate(pos.x,pos.y);
        rectMode(CENTER);
        strokeWeight(3);
        rect(0,0,this.l,this.h);
        pop();
    }
}