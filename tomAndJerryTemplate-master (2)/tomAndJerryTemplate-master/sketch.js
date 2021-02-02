var mouse,mouseTeasingImg,mouseEndImg,mouse1;
var cat, catMovingImg, catEndImg,cat1;
var garden, gardenImg;
var PLAY = 1;
var END = 0;
var gameState = PLAY;
function preload() {
    mouse = loadImage("mouse1.png");
    mouseTeasingImg = loadAnimation("mouse2.png","mouse3.png");
    mouseEndImg = loadImage("mouse4.png");
    cat = loadImage("cat1.png");
    catMovingImg = loadAnimation("cat2.png","cat3.png");
    catEndImg = loadImage("cat4.png");
    gardenImg = loadImage("garden.png");

    //load the images here
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    garden = createSprite(0,0,600,600);
    garden.addImage(gardenImg);

    cat1 = createSprite();
    cat1.addImage(cat1.png);

    mouse1 = createsprite();
    mouse1.addImage(mouse1.png);

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width - mouse.width)/2 &&
    mouse.x - cat.x < (mouse.width - cat.width)/2 &&
    cat.y - mouse.y < (cat.height - mouse.height)/2 &&
    mouse.y - cat.y < (mouse.hieght - cat.height)/2){
        cat.velocityX = 0;
        cat.addAnimation("catLastImage",catEndImg);
        cat.changeAnimation("catLastImage");
    }
    

    drawSprites();
}


function keyPressed(){
    if(keycode === LEFT_ARROW){
        cat.velocityX = -5;
        cat.addAnimation("catRunning",catMovingImg);
        cat.changeAnimation("catRunning");
    }

  //For moving and changing animation write code here


}
