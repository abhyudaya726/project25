class Ball{
    constructor(x,y,radius){

        var options = {
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:2.0
        }

        this.x = x;
        this.y = y;
        this.r = radius;
        this.bodies = Bodies.circle(this.x,this.y,this.r-20/2,options);
        this.image = loadImage("paper.png")
        World.add(world,this.bodies);
    }
    display(){
        var pos = this.bodies.position;

        push();
        translate(pos.x,pos.y);
        imageMode(CENTER);
        strokeWeight(3);
        image(this.image,0,0,this.r,this.r);
        pop();
    }
}