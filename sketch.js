  var car,wall;
//created a variable for car and wall

  var speed, weight;
//created a variable for speed and weight


function setup() {
  createCanvas(1600,400);//created the canvas
    
    speed=random(55,90);
    weight=random(400,1500);
  //assigned random values to speed and velocity
    
    car =createSprite(50,200,50,50);
  //created the sprite for car
  
    wall=createSprite(1500,200,60,height/2);
    wall.shapeColor=color(80,80,80);
  //created the sprite for wall and assigned a color to it
  }

  function draw() {
  background(255,255,255);//background
    
    car.velocityX=speed;
  //Assigned the velocityX property of the car sprite to the speed variable


  if(wall.x-car.x<(car.width+wall.width)/2){
    car.velocityX=0;
  //assigned velocity of the car to zero
    
    var deformation =0.5*weight*speed*speed/22509;
  //created the variable deformation
    
  if (deformation>180){
      car.shapeColor=color(255,0,0);
    }
    
  if (deformation<180 && deformation>100){
      car.shapeColor=color(230,230,0);
    }
    
  if(deformation<100){
      car.shapeColor=color(0,255,0); 
    }
  //to change the color of the car according to the magnitude of deformation
  }

     
  drawSprites();
}