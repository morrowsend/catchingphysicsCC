// {CPSpCompensationCalculationPowerPathwayMechanicalPID}{600}{500}

const magnitudes=[];
var values = [];
const scaleFactor=200;
const locpucks =[108,198];
const tradeOffOffset = 180;



function preload() {
	chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");

}
function setup(){
	createCanvas(600,500);

	magnitudes[0]= new controlPuck();
	magnitudes[0].create(locpucks[0],locpucks[1]);
	boxesbutton = new checkButton(494-18, 374,"trade-off",false);
}

function draw() {
	background(cWhite);
	boxesbutton.drawButton();

	values[0] = createVector(magnitudes[0].getValues().xSet,magnitudes[0].getValues().ySet).mult(scaleFactor);

	words("set quantities", locpucks[0]-40,locpucks[1]-45);
	words("force / newton", locpucks[0],locpucks[1]+61);
	words("velocity / metre/second", locpucks[0]+50, locpucks[1]);


push();
		translate(350, 80);
		push();
			scale(1.2);
			powerPathway("mechanical");
		pop();

		push();
			translate(36,130);
			scale(1.2);
			power(values[0].x*values[0].y/1500);
		pop();

	pop();

	if (boxesbutton.buttonisChecked){
  tradeOff(locpucks[0],locpucks[1]+tradeOffOffset,values[0].x,values[0].y,ccurrent,cpotentialdifference);
}

	push();

		translate(20,80);
		subHead('qualitative: what',0, 0);
		translate(0,54);
		subHead('quantitative: how much',0, 0);
	pop();

titleBold("Calculating the power in the mechanical working pathway");
}

function mouseReleased(){
	boxesbutton.changeState();
}

function keyTyped() {
	if (key === "s") {


	saveCanvas("aSnapshot", "png");
	}
	return false;
}

