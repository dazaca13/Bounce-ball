var ball,img,paddle,ball_img,paddle_img;

function preload() {
  ball_img=loadImage("ball.png");
  paddle_img=loadImage("paddle.png");
}
function setup() {
  createCanvas(400, 400);
  ball = createSprite(200, 200, 10, 10)
paddle = createSprite(370, 200, 10, 50)  

 ball.velocityX = 9
  
  

}

function draw() {
  background(205,153,0);
  ball.addImage(ball_img);
  paddle.addImage(paddle_img);
  var edges=createEdgeSprites();
  
  ball.bounceOff(edges[0])
  ball.bounceOff(edges[2])
  ball.bounceOff(edges[3])
 
  ball.bounceOff(paddle,randomVelocity)
  
 
 paddle.collide(edges[2])
  paddle.collide(edges[3])
 
  
  
  if(keyDown(UP_ARROW))
  {
    paddle.velocityY = paddle.velocityY - 2
  }
  
  if(keyDown(DOWN_ARROW))
  {
    paddle.velocityY = paddle.velocityY +2 
  }
  drawSprites();
  
}

function randomVelocity()
{
  ball.velocityY=random(5,-5);
}

