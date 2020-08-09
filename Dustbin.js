class Dustbin{
    constructor(x,y,width,height){
       var options ={
           isStatic:true
        }
        this.dustbin=loadImage("dustbingreen.png");
        this.body=Bodies.rectangle(x, y,width,height,options);
        this.width=300;
         this.height=180;
        World.add(world,this.body);
    }
    display(){
        
      var pos = this.body.position;
      push();
      imageMode(CENTER);
      image(this.dustbin,pos.x,pos.y-90,this.width,this.height) ;
      pop();

      }
    }
