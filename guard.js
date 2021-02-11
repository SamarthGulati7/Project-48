class Guard {
  constructor(x,y,x1,y1) {
    
    this.body = createSprite(x,y,20,30);
    this.width = 20;
    this.height = 30;
    this.body.velocityX = x1;
    this.body.velocityY = y1;
    this.image1 = loadAnimation("guardimgs/guard_left_1.png","guardimgs/guard_left_2.png","guardimgs/guard_left_3.png","guardimgs/guard_left_4.png","guardimgs/guard_left_5.png");
    this.image2 = loadAnimation("guardimgs/guard_right_1.png","guardimgs/guard_right_2.png","guardimgs/guard_right_3.png","guardimgs/guard_right_4.png","guardimgs/guard_right_5.png");

    
  }
  display(){
    
    var pos =this.body.position;
    this.body.addAnimation("a",this.image1);
    this.body.scale = 0.4;

    this.body.bounceOff(box1.body);
    this.body.bounceOff(box2.body);
    this.body.bounceOff(box3.body);
    this.body.bounceOff(box4.body);
    this.body.bounceOff(box5.body);
    this.body.bounceOff(box6.body);
    this.body.bounceOff(box7.body);
    this.body.bounceOff(box8.body);
    this.body.bounceOff(box9.body);
    this.body.bounceOff(box10.body);
    this.body.bounceOff(box11.body);
    this.body.bounceOff(box12.body);
    this.body.bounceOff(box13.body);
    this.body.bounceOff(box14.body);
    this.body.bounceOff(box15.body);
    this.body.bounceOff(box16.body);
    this.body.bounceOff(box17.body);
    this.body.bounceOff(box18.body);
    this.body.bounceOff(box19.body);
    this.body.bounceOff(box20.body);
    this.body.bounceOff(box21.body);
    this.body.bounceOff(box22.body);
    this.body.bounceOff(box23.body);
    this.body.bounceOff(box24.body);
    this.body.bounceOff(box25.body);
    this.body.bounceOff(box26.body);
    this.body.bounceOff(box27.body);
    this.body.bounceOff(box28.body);
    this.body.bounceOff(box29.body);
    this.body.bounceOff(box30.body);
    this.body.bounceOff(box31.body);
    this.body.bounceOff(box32.body);
    this.body.bounceOff(box33.body); 

  }
};
