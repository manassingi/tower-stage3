class Ground{

    constructor(){
        var ground_options={
            isStatic : true
          }
        
          this.ground = Bodies.rectangle(450,390,1300,20,ground_options)
          World.add(world,this.ground);
    }
    display(){
        noStroke();
        fill("white");
        rectMode(CENTER);
        rect(this.ground.position.x,this.ground.position.y,900,20);
    }
}