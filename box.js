class Box {
    constructor(x,y,width,height) {
      
      this.body = createSprite(x,y,width,height);
      this.width = width;
      this.height = height;
      
    }
    display(){
      var pos =this.body;
      rectMode(CENTER);
      this.body.shapeColor =("white");
      rect(pos.x, pos.y, this.width, this.height);
    }
  };