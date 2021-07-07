



function preload() {
    bg = loadImage("images/iss.png");
    sleep = loadAnimation("images/sleep.png"); 
    brush = loadAnimation("images/brush.png");
    gym = loadAnimation("images/gym1.png","images/gym1.png","images/gym2.png","images/gym2.png");
    eat = loadAnimation("images/eat1.png","images/eat1.png","images/eat1.png","images/eat2.png","images/eat2.png","images/eat2.png"); 
    bath = loadAnimation("images/bath1.png","images/bath1.png","images/bath1.png","images/bath2.png","images/bath2.png","images/bath2.png");
    drink = loadAnimation("images/drink1.png","images/drink1.png","drink2.png","drink2.png")
    move = loadAnimation("images/move1.png","images/move1.png","images/move2.png","images/move2.png"); 
    
    }


function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  

  astronaut = createSprite(300,230);
  astronaut.addAnimation("sleeping",sleep);
  astronaut.scale = 0.1
  astronaut.bounceOff(edges);
 

}

function draw() {
  background(bg);  
 
  
  text("Instructions:",700,50);
  textSize(20);

  text("UP Arrow: Brushing",700,100);
  textSize(20);

  text("DOWN Arrow: Gymming",700,150);
  textSize(20);

  text("LEFT Arrow: Eating",700,200);
  textSize(20);

  text("RIGHT Arrow: Bathing",700,250);
  textSize(20);

  text("M Key: Moving",700,300);
  textSize(20);


  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing",brush);
    astronaut.changeAnimation("brushing");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gymming",gym);
    astronaut.changeAnimation("gymming");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("bathing",bath);
    astronaut.changeAnimation("bathing");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("eating",eat);
    astronaut.changeAnimation("eating");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("m")){
    astronaut.addAnimation("moving",move);
    astronaut.changeAnimation("moving");
    astronaut.y = 350;
    astronaut.velocityX = 10;
    astronaut.velocityY = 10;
  }



  edgeSprites();
  drawSprites();

}
