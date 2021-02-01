var tom,jerry;

function preload() {
    //load the images here

    garden=loadImage("images/garden.png");

    cat1=loadImage("images/cat1.png");
    cat2=loadAnimation("images/cat2.png","images/cat3.png");
    cat3=loadImage("images/cat4.png");

    mouse1=loadImage("images/mouse1.png");
    mouse2=loadAnimation("images/mouse2.png","images/mouse3.png");
    mouse3=loadImage("images/mouse4.png");
}

function setup(){
    createCanvas(1000,650);

    //create tom and jerry sprites here

    tom=createSprite(800,550,10,10);
    tom.addImage(cat1);
    tom.scale=0.2;

    jerry=createSprite(200,550,10,10);
    jerry.addImage(mouse1);
    jerry.scale=0.1;
}

function draw() {

    background(garden);

    //Write condition here to evalute if tom and jerry collide

    if(tom.x-jerry.x<(tom.width-jerry.width)/2){
        tom.velocityX=0;

        tom.addAnimation("catLastImage",cat3);
        tom.changeAnimation("catLastImage");
        tom.x=560;
        tom.y=500;
        tom.scale=0.2;

        jerry.addAnimation("mouseLastImage",mouse3);
        jerry.changeAnimation("mouseLastImage");
        jerry.x=482;
        jerry.y=500;
        jerry.scale=0.1;
}
drawSprites();
}

function keyPressed(){

  //For moving and changing animation write code here

  if(keyDown("left_arrow")) {

     tom.velocityX=-5;
    
    tom.addAnimation("cat Running",cat2)
    tom.changeAnimation("cat Running")

    jerry.addAnimation("mouse Teasing",mouse2);
    jerry.changeAnimation("mouse Teasing");
}}

