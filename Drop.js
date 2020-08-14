class drop{
    constructor(x,y){
        var options={
            restitution=0.8,
            friction=0.1,
        }
        this.drop=Bodies.ellipas(x,y,options)  
        this.inviground=createSprite(400,380,20,10);
        
        World.add(this.drop);
        update(){
          if(this.drop.isTouching(this.invGround)){

          }  
        
        }
    };
