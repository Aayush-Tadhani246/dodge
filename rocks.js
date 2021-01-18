class Rocks  {
    constructor(x,y,width,height) {
      var options = {
          density: 0.5,
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
      push()
      imageMode(CENTER)
      if(frameCount%100===0){
       
        image(this.rk, pos.x , pos.y, 400,300 )
      }
      
    
      //rect(pos.x, pos.y, this.width, this.height);\
      pop()
    }
  };
