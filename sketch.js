var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20,box21,box22,box23,box24,box25,box27,box28,box29,box30,box31,box32,box33;
var thief;
var thief1,thief2,thief3;
var mazeimg;
var d1,d2,d3,d4;
var g1,g2,g3,g4,g5,g6,g7,g8;
var score,life;
var gameState ="play";
var restart;
var guard1,guard2;
function preload(){

    thief1 = loadAnimation("thiefimgs/thief_right_1.png","thiefimgs/thief_right_2.png","thiefimgs/thief_right_3.png");
    thief2 = loadAnimation("thiefimgs/thief_left_1.png","thiefimgs/thief_left_2.png","thiefimgs/thief_left_3.png");
    thief3 = loadAnimation("thiefimgs/thief_standing_1.png","thiefimgs/thief_standing_1.png","thiefimgs/thief_standing_2.png");
    
}

function setup(){
    var canvas = createCanvas(1000,800);
        
    box1 = new Box(500,48,1000,5);
    box2 = new Box(995,415,5,730);
    box3 = new Box(500,775,1000,5);
    box4 = new Box(5,415,5,730);
    box5 = new Box(360,220,5,340);
    box6 = new Box(905,100,5,100);
    box7 = new Box(820,210,5,150);
    box8 = new Box(905,280,180,5);
    box9 = new Box(615,160,220,5);
    box10 = new Box(175,150,130,5);
    box11 = new Box(115,210,5,110);
    box12 = new Box(375,270,525,5);
    box13 = new Box(640,475,5,405);
    box14 = new Box(720,270,5,210);
    box15 = new Box(495,380,5,210);
    box16 = new Box(130,390,250,5);
    box17 = new Box(255,445,5,110);
    box18 = new Box(570,425,5,130);
    box19 = new Box(470,490,210,5);
    box20 = new Box(440,555,5,120);
    box21 = new Box(370,555,5,120);
    box22 = new Box(257,617,230,5);
    box23 = new Box(140,555,5,120);
    box24 = new Box(145,735,5,70);
    box25 = new Box(255,735,5,70);
    box26 = new Box(340,700,170,5);
    box27 = new Box(510,715,5,120);
    box28 = new Box(720,680,150,5);
    box29 = new Box(800,625,5,110);
    box30 = new Box(730,530,5,125);
    box31 = new Box(818,462,175,5);
    box32 = new Box(805,375,180,5);
    box33 = new Box(900,575,5,400);
    d1 = new Diamond(20,65,"red");
    d2 = new Diamond(980,65,"blue");
    d3 = new Diamond(20,755,"yellow");
    d4 = new Diamond(980,755,"green");
    g1 = new Guard(100,200,0,4);
    g2 = new Guard(20,350,4,0);
    g3 = new Guard(400,250,4,0);
    g4 = new Guard(780,200,0,4);
    g5 = new Guard(740,70,4,0);
    g6 = new Guard(920,750,0,4);
    g7 = new Guard(20,420,4,0);
    g8 = new Guard(100,750,0,4);

    thief = createSprite(480,400,20,30);
    thief.addAnimation("th0",thief3);
    thief.scale = 0.4;
    thief.debug = false;
    thief.setCollider("rectangle",0,0,40,thief.height);
    thief.addAnimation("th1",thief1);
    thief.addAnimation("th2",thief2);

    score = 0;
    life = 3;
    
}

function draw(){
    background("black");
    if(gameState === "play"){

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();
    box26.display();
    box27.display();
    box28.display();
    box29.display();
    box30.display();
    box31.display();
    box32.display();
    box33.display();
    
    d1.display();
    d2.display();
    d3.display();
    d4.display();

    g1.display();
    g2.display();
    g3.display();
    g4.display();
    g5.display();
    g6.display();
    g7.display();
    g8.display();

    thief.collide(box1.body);
    thief.collide(box2.body);
    thief.collide(box3.body);
    thief.collide(box4.body);
    thief.collide(box5.body);
    thief.collide(box6.body);
    thief.collide(box7.body);
    thief.collide(box8.body);
    thief.collide(box9.body);
    thief.collide(box10.body);
    thief.collide(box11.body);
    thief.collide(box12.body);
    thief.collide(box13.body);
    thief.collide(box14.body);
    thief.collide(box15.body);
    thief.collide(box16.body);
    thief.collide(box17.body);
    thief.collide(box18.body);
    thief.collide(box19.body);
    thief.collide(box20.body);
    thief.collide(box21.body);
    thief.collide(box22.body);
    thief.collide(box23.body);
    thief.collide(box24.body);
    thief.collide(box25.body);
    thief.collide(box26.body);
    thief.collide(box27.body);
    thief.collide(box28.body);
    thief.collide(box29.body);
    thief.collide(box30.body);
    thief.collide(box31.body);
    thief.collide(box32.body);
    thief.collide(box33.body);
    
   if(thief.isTouching(d1.body)){
        
        d1.body.destroy();
        score+=1;
    }
    if(thief.isTouching(d2.body)){
        
        d2.body.destroy();
        score+=1;
    }
    if(thief.isTouching(d3.body)){
        
        d3.body.destroy();
        score+=1;
    }
    if(thief.isTouching(d4.body)){
        
        d4.body.destroy();
        score+=1;
    }
    if(score === 4){
        
        gameState ="win";
    }
    if(life === 0){

        gameState ="end";
    }

    if(thief.isTouching(g1.body)||thief.isTouching(g2.body)
    ||thief.isTouching(g3.body)||thief.isTouching(g4.body)
    ||thief.isTouching(g5.body)||thief.isTouching(g6.body)
    ||thief.isTouching(g7.body)||thief.isTouching(g8.body)){
        
        thief.x=480;
        thief.y=400;
        life-=1;
    }
    }
    drawSprites();

    if(gameState === "win"){

        Win();

    }
    if(gameState === "end"){

        end();

    }
    
    textSize(20);
    fill("white");
    textFont("ALGERIAN");
    text("Diamonds collected: "+score,20,25);
    text("Life: "+ life,780,25);

}
function keyPressed(){

    if(keyCode === UP_ARROW){

        thief.velocityY = -3; 
    }   
    if(keyCode === DOWN_ARROW){

        thief.velocityY = 3; 
    }   
    if(keyCode === LEFT_ARROW){

        thief.velocityX = -3 ;
        thief.changeAnimation("th2",thief2); 
        thief.scale = 0.38;
    }   
    if(keyCode === RIGHT_ARROW){

        thief.velocityX = 3; 
        thief.changeAnimation("th1",thief1);
        thief.scale = 0.38;
    }   

}
function Win(){

    background("black");
    win = createElement('h2');
    win.html("Mangu stole all the diamonds!");
    win.position(90,300);
    win.style('color','white');
    win.style('fontSize','60px');
    win.style('fontStyle','ALGERIAN');
}
function Serve(){

    background("black");
    textSize(20);
    fill("red");
    textFont("ALGERIAN");
    text("Mangu is a thief. He wants to steal some diamonds.",200,300);
    text("There are some guards. If Mangu touches them, his lives decrease.",200,330);
    text("You can move him with arrow keys.Help him capture all the diamonds.",200,360);
    text("Press the play button to start the game",200,390);
    g1.body.velocityX=4;
    g2.body.velocityY=4;
    g3.body.velocityX=4;
    g4.body.velocityY=4;
    g5.body.velocityX=4;
    g6.body.velocityY=4;
    g7.body.velocityX=4;
    g8.body.velocityY=4;

    button = createButton('PLAY');
    button.position(200,450);
    button.mousePressed(function(){

        gameState = "play";
        button.hide();

    })

}
function end(){

    background(0);
    textSize(40);
    fill("blue");
    textAlign(CENTER);
    textFont("ALGERIAN");
    text("Game Over! Mangu got caught by guards ",500,400);
    var End = createButton('Restart');
    End.position(500,500);
    End.style('color','cyan');
    End.style('background-color','blue');

    End.mousePressed(()=>{

        window.location.reload();

    })

}