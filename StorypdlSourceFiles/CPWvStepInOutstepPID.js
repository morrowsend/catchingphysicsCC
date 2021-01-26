// WvStepInOutstepPID

function preload() {
	chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");
}

function setup() {
    createCanvas(500, 400);
    aheadornot=new createSliderDivider(300,150,200,15,7,[0.5],false); 
}

function draw() {

background(CWHITE);
const Afreq=.01;

aheadornot.draw();
var phaseAngle=(aheadornot.getValue(0)-0.5)*2*PI;

push();
	translate(60, 250);
	var blueAmplitude =12*sin(Afreq*frameCount);
	var greenAmplitude =12*sin(Afreq*frameCount+phaseAngle);
	showDisplacement(blueAmplitude, 0, CIDEABLUE);
	translate(100, 0);
	showDisplacement(greenAmplitude, 0, CIDEAGREEN);
pop();

placeWords("green leads", 330, 170);
placeWords("in step", 330, 255);
placeWords("green lags", 330, 340);

placeTitleBold("More or less in step: vary how much");
}

function mousePressed(){
    aheadornot.mousePressed();
	}

function mouseReleased(){
    aheadornot.mouseReleased();
    }

function keyTyped() {
	if (key === "s") {


	saveCanvas("aSnapshot", "png");
	}
	return false;
}



