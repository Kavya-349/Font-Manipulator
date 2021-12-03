var leftWristX = 0;
var rightWristX = 0;
var difference = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550,550);
    video.position(5, 100)

    canvas = createCanvas(600,550);
    canvas.position(570, 140);

    posenet = ml5.poseNet(video, modalLoaded);
    posenet.on('pose', gotPoses);
}

function modalLoaded() {
    console.log("posenet is initialised");
}

function draw() {
    background('#949191');

    textSize(difference);
    fill('#fc0000');
    text('Kavya Jain', 100, 500);
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = Math.floor(leftWristX - rightWristX);

        console.log("difference - " + difference + " right wrist x - " + rightWristX + " left wrist x - " + leftWristX);
    }
}