class Diamond {
    constructor(x,y,color) {
      
      this.body = createSprite(x,y,25,25);
      this.width = 25;
      this.height = 25;
      this.color = color;
      this.img = loadImage("diamondimg.png");
      
    }
    display(){
      var pos =this.body;
      rectMode(CENTER);
      this.body.shapeColor =this.color;
      this.body.addImage("1",this.img);
      this.body.scale = 0.2;
    }
  };