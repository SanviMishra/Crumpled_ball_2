class Paperclass{

    constructor(x, y,radius){
        var options ={
            isStatic:false,
            restitution:0.3,
            friction:0.1,
            density:0.5
        }

        this.body=Bodies.circle(x, y,radius/2,options);
        this.radius=radius;
         this.ball=loadImage("paper.png");
         
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
       //console.log("high");
       push();
        imageMode(CENTER)
        image(this.ball,pos.x,pos.y,this.radius,this.radius);
      pop();
    }

}