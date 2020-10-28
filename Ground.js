class Ground{
    constructor(x,y,lenght,height){

        var options = {
            isStatic:true
        }

        this.bodies = Bodies.rectangle(x,y,lenght,height,options);
        World.add(world,this.bodies);

        this.l = lenght;
        this.h = height;
    }
    display(){
        var pos = this.bodies.position;

        rect(pos.x,pos.y,this.l,this.h);
    }
}