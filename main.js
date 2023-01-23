function preload()
{
clown_nose= loadImage('https://i.postimg.cc/tR65WB7Y/clown-nose.png');
}

function setup()
{
    canvas = createCanvas(300,300);
    canvas.center();
    video= createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet= ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log('PostNet Is Initialized');
}

function gotPoses(results)
{ 
  if(results.length>0)
  {
      console.log(results);
      noseX=  results[0].pose.nose.x;
      noseY=  results[0].pose.nose.y;
      console.log("nose x = " + results[0].pose.nose.x);
      console.log("nose y = " + results[0].pose.nose.y);
  }
}

function draw()
{
  image(video, 0, 0, 300, 300);
  fill(255, 0, 0);
  stroke(255, 0 ,0);
  circle(noseX, noseY, 20);
  image(clown_nose, noseX, noseY, 25, 25);
}

function take_snapshot()
{
    save('myFilterImage.png');
}

noseX= 0;
noseY= 0;