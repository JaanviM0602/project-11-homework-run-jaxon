var path,pathImg 
var runner,runnerImg
var invisible_boundry_left
var invisible_boundry_right

function preload(){
  //pre-load images
  pathImg = loadImage("path.png");
  runnerImg = loadAnimation("Runner-1.png", "Runner-2.png")

}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path = createSprite(200,200);
  path.addImage("pathImg", pathImg);
  path.velocityY = 4;
  path.scale = 1.2;
  runner = createSprite(200,350);
  runner.addAnimation("runnerImg", runnerImg);
  runner.scale = 0.08
  invisible_boundry_left = createSprite(20,200,50,400)
  invisible_boundry_left.visible = false
  invisible_boundry_right = createSprite(380,200,50,400)
  invisible_boundry_right.visible = false

}

function draw() {
  if(path.y > 400) {
    path.y = height/2
  }

  runner.x = mouseX
  runner.collide(invisible_boundry_left);
  runner.collide(invisible_boundry_right);

  drawSprites();
  drawSprites();
}
