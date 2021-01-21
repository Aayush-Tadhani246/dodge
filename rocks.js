class Rocks  {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.rk = loadImage("Images/rock.png")
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push()
      rotate(angle)
      translate(pos.x,pos.y)
      imageMode(CENTER)
      image(this.rk, 0,0, this.width,this.height )
      
      
    
      //rect(pos.x, pos.y, this.width, this.height);\
      pop()
    }
  };
