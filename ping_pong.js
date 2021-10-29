 rightWristX = "";
 rightWristY = "";
 
 function preload(){

 }

 function setup(){
  canvas = createCanvas(480, 380);
  canvas.center();

  video = createCapture(VIDEO);
  video.hide();

  poseNet.on("pose", gotPoses);
 }

 function gotPoses(results){
	console.log(results);
	rightWristX = results[0].pose.rightWrist.x;
	rightWristY = results[0].pose.nose.rightWrist.y;
	
}

 function draw(){
  image(video, 0, 0, 480, 380);
 }