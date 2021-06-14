var skyImg
var fish
var craneImg,crane
var fish1, fish2
var fishGroup
var score =0;

function preload() {
    skyImg=loadImage("picture.jpg");
    crane1Img=loadAnimation("crane.png");
    craneimg2= loadAnimation("cranemirror.png")
    fish1=loadImage("fish1_mirror.png");
    fish2=loadImage("fish2.png");
    fish1_m= loadImage("fish1.png")
    fish2_m=loadImage("fish2_mirror.png")
   
}

function setup(){
        
        createCanvas(1200,600);
    crane=createSprite(200,100,20,20);
    crane.addAnimation("standing",crane1Img);
    crane.addAnimation("mirror",craneimg2)
    crane.scale=0.8
   // crane.debug=true;
    crane.setCollider("circle",-100,50,30)
    

    fishGroup=createGroup();

    

    
}

function draw(){
    background(skyImg);


    if(keyDown("a")){
    crane.x=crane.x-2
    crane.changeAnimation("standing",crane1Img);
    crane.setCollider("circle",-100,50,30)
    }

    if(keyDown("w")){
    crane.y=crane.y-2        
    }

    if(keyDown("d")){
    crane.x=crane.x+2   
    crane.changeAnimation("mirror",craneimg2)   
    crane.setCollider("circle",100,50,30)  
    }

    if(keyDown("s")){
    crane.y=crane.y+2        
    }

    spawnFish();

    for (var i = 0; i < fishGroup.length; i++) {
        var temp_item = fishGroup.get(i);

        if (mousePressedOver(temp_item)&& crane.isTouching(temp_item)) {
            score = score + 1;

            temp_item.destroy()
            console.log("touched and clicked")
        }
    }
    
   
drawSprites()
textSize(50);
fill("black")
text("Score :"+score,600,300)
    
}
function spawnFish(){
    if (frameCount % 50 === 0){

        var r = Math.round(random(1,3))
        if(r===1){
            var fish = createSprite(0,random(300,600),10,40);
            fish.velocityX = 6
            var rand = Math.round(random(1,2));
            switch(rand) {
              case 1: fish.addImage(fish1);
                      break;
              case 2: fish.addImage(fish2);
                      break;
             
              default: break;
            }
            fish.scale=0.4
        }else{
            var fish = createSprite(1200,random(300,600),10,40);
            fish.velocityX = -6
            var rand = Math.round(random(1,2));
            switch(rand) {
              case 1: fish.addImage(fish1_m);
                      break;
              case 2: fish.addImage(fish2_m);
                      break;
             
              default: break;
            }
            fish.scale=0.4
        }
        
    //  fish.debug=true  
     fishGroup.add(fish)
      
       //generate random obstacles
      
    }
}
