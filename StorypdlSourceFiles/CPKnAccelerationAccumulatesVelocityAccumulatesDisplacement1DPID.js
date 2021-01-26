// CPKnAccelerationAccumulatesVelocityAccumulatesDisplacement1DPID


var stateof=0;
var runtime=0;
var velocityNow=0;
var objectLocation=0;
var controlbutton;

function preload() {
	chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");
}

function setup(){
    createCanvas(800, 400);

    controlbutton=new CreateControlButton(20,350,60,30);

    displacmentSet=new createSliderDivider(40,220,100,15,0,[0.7],false);
    velocitySet=new createSliderDivider(200,220,100,15,0,[0.7],false);
    accelerationSet=new createSliderDivider(360,220,100,15,0,[0.7],false);

}

function draw() {
    background(CWHITE);

    accelerationSet.draw();
    controlbutton.drawButton();
    var initialdisplacement = (displacmentSet.getValue()-0.5)*200;
    var initialVelocity = (velocitySet.getValue()-0.5)*PXSCALE;
    var accelerationAccumlates = (accelerationSet.getValue(0)-0.5)*2;

    if (controlbutton.buttonwasPressed){
		stateof++;
		stateof=stateof%3;
		controlbutton.buttonwasPressed=false;
    }

    switch(stateof){
        case 0:
//            ready to go
            placeWords("go",28,height-32);
			runtime=0;
            displacmentSet.draw();
            placeWords("set\ninitial\ndisplacement",70,230);
            velocitySet.draw();
            placeWords("set\ninitial\nvelocity",230,230);
            velocityNow=initialVelocity;
            objectLocation=initialdisplacement;
            break;
        case 1:
//            running
            placeWords("pause",28,height-32);
            runtime++;
            velocityNow+=accelerationAccumlates*.05;
            objectLocation+=velocityNow*5;
            break;
        case 2:
//            paused
            placeWords("reset",28,height-32);
            break;
                      }


    push();
        translate(300+objectLocation,120);
        drawPoVObject("Bob");
        push();
            translate((-velocityNow*50),32);
            showVelocity(velocityNow*PXSCALE,90,CPOVALICE);
        pop();
        push();
            translate((-accelerationAccumlates*50),-32);
            showAcceleration(accelerationAccumlates*PXSCALE,90,CACCELERATION);
        pop();
    pop();

    push();
    translate(300,170);
    showDisplacement(objectLocation/10,90,CPOVALICE);
    pop();

    push();
    translate(40,120);
    drawPoV("AliceRight");
    pop();



    placeWords("set\nacceleration",390,230);
  placeTitleBold("set acceleration and velocity, watch the accumulations");
}

function mousePressed(){
	displacmentSet.mousePressed();
	velocitySet.mousePressed();
	accelerationSet.mousePressed();

	}
function mouseReleased(){
	displacmentSet.mouseReleased();
	velocitySet.mouseReleased();
	accelerationSet.mouseReleased();
	controlbutton.checkPressed();
    }

function keyTyped() {
	if (key === "s") {


	saveCanvas("aSnapshot", "png");
	}
	return false;
}

