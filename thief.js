class Thief {
    constructor(x, y) {
      var options = {
          'restitution':0.1,
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, 20, 30, options);
      this.width = 20;
      this.height = 30;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      rotate(this.body.angle);
      rectMode(CENTER);
      this.body.shapeColor("red");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };