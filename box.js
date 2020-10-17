class box{

    constructor (x,y,width,height){
    
        var options={
    
            //isStatic:false,
            restitution:0.3,
			friction:0.5,
            //density:1.2
           
        }
      //  this.image = loadImage("wood1.png");
        this.Visiblity = 255;
        this.body=Bodies.rectangle(x,y, width, height, options);
        this.width=width;
        this.height=height;
            World.add(world,this.body);

    }
    display(){
        //fill("yellow")
        fill("red")
        
        console.log(this.body.speed);
        if(this.body.speed < 3.5){
        var angle=this.body.angle;
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
        }
        else{
          World.remove(world, this.body);
          push();
          this.Visiblity = this.Visiblity - 8;
          tint(255,this.Visiblity);
          //image(this.image, this.body.position.x, this.body.position.y, 50, 50);
         pop();
        }
        
      }
     
      score(){
        if (this.Visiblity < 0 && this.Visiblity > -6){
          score++;
        
        }
       
      }
      
    }
