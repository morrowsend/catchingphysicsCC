// WvStepContributionsSumPID

function preload() {
	chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");
}

function setup() {
    createCanvas(700, 550);
    aheadornot=new createSliderDivider(200,200,200,15,7,[0.5],false);
	sumbutton = new CreateCheckButton(370, height-50,"show addition",false);
    resultantbutton = new CreateCheckButton(560, height-50,"show resultant",false);
}

function draw() {

background(CWHITE);
const Afreq=.01;


aheadornot.draw();
var phaseAngle=(aheadornot.getValue(0)-0.5)*2*PI;
sumbutton.drawButton();
resultantbutton.drawButton();

push();
	translate(60, 300);
	var contribAValue =9*sin(Afreq*frameCount);
	var contribBValue =9*sin(Afreq*frameCount+phaseAngle);
	var amplitudeValue=contribAValue+contribBValue;
	showContribution(contribAValue, 0, CCONCYAN);
	translate(50, 0);
	showContribution(contribBValue, 0, CCONPINK);
pop();

if (sumbutton.buttonisChecked){
	push();
		translate(370, 300);
		showContribution(contribAValue, 0, CCONCYAN);
		translate(0, -contribAValue*PXSCALE);
		showContribution(contribBValue, 0, CCONPINK);
	pop();
}

if (resultantbutton.buttonisChecked){
	push();
	translate(560, 300);
	showAmplitude(amplitudeValue, 0, CIDEARED);
	pop();
}


placeWords("out of step", 230, 220);
placeWords("in step", 230, 305);
placeWords("out of step", 230, 390);

placeTitleBold("Contributions more or less in step add to a resultant");
}

function mousePressed(){
    aheadornot.mousePressed();
	}

function mouseReleased(){
    aheadornot.mouseReleased();
    resultantbutton.changeState();
    sumbutton.changeState();
    }

function keyTyped() {
	if (key === "s") {


	saveCanvas("aSnapshot", "png");
	}
	return false;
}



