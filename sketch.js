var pc,bakaImage1,bakaImage2,baka
,wallImage,pcImage;
var gamestate = 0;
var playButton, loadingTime=0;
var loading, loadingsp;
var playButtonImage;

function preload(){
    pc = loadImage("gun1.png");
    bakaImage1 = loadImage("cicrle1.png");
    bakaImage2 = loadImage("cicrle2.png");
    wallImage = loadImage("bg1.png");
    loading= loadImage("loading1.jpg");
    playButtonImage = loadImage("play.png");
    
    }

function setup(){
    createCanvas(windowWidth,windowHeight);
   // playButton = createButton("Play");
   // playButton.position(displayWidth/2,displayHeight*3/8);
    playButton = createSprite(displayWidth/2,displayHeight*3/8,50,190);
    playButton.addImage(playButtonImage);
    //playButton.debug = true;
    playButton.setCollider("rectangle",0,0,190,50);

    loadingsp=createSprite(windowWidth/2,windowHeight/2);
    loadingsp.addImage(loading);
    loadingsp.visible=false;
    }


function draw(){
    if(gamestate===0){
        background("black");
        textSize(100);
        fill("lightBlue");
        text("Game",displayWidth/2-100,displayHeight/4);
        
    if(mousePressedOver(playButton)){
        start();
    }

    
    console.log(gamestate);

    drawSprites();
}



function start(){
    gamestate=1;
    background("blue"); 
    loadingsp.visible=true;
     
}
}