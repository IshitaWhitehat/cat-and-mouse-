var bg_img;
var cat,cat_img1,cat_img2;
var mouse,mouse_img1,mouse_img2;
function preload() {
    //load the images here
    bg_img=loadImage("images/garden.png");
    cat_img1=loadAnimation("images/cat1.png");
    cat_img2=loadAnimation("images/cat2.png","images/cat3.png");
    mouse_img1=loadAnimation("images/mouse1.png");
    mouse_img2=loadAnimation("images/mouse2.png","images/mouse3.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat=createSprite(670,700,10,10);
    cat.addAnimation("cat_img1",cat_img1);
    cat.scale=0.1;
    mouse=createSprite(270,700,10,10);
    mouse.addAnimation("mouse_img1",mouse_img1);
    mouse.scale=0.1

}

function draw() {

    background(bg_img);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x-mouse.x<(cat.width/2+mouse.width/2)&&mouse.x-cat.x<(mouse.width/2+mouse.width/2)){
       cat.addAnimation("catHappy",cat_img1);
       cat.changeAnimation("catHappy");
       mouse.addAnimation("mouseHappy",mouse_img1);
       mouse.changeAnimation("mouseHappy");
    }

    
    drawSprites();
    keyPressed();
}


function keyPressed(){

  //For moving and changing animation write code here
     if(keyCode === LEFT_ARROW){
        mouse.addAnimation("mouseTeasing",mouse_img2);
        mouse.changeAnimation("mouseTeasing");
        mouse.frameDelay=25;
        cat.x=cat.x-2;
        cat.addAnimation("catMoving",cat_img2);
        cat.changeAnimation("catMoving");
        }
}
