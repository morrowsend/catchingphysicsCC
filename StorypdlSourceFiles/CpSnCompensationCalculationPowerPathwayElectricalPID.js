// {CPSnCompensationCalculationPowerPathwayElectricalPID}{600}{500}

const magnitudes=[];
var values = [];
const scaleFactor=200;
const locpucks =[135,194];
const tradeOffOffset = 180;

function preload() {
	chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");
}

function setup(){
	createCanvas(600,500);

	magnitudes[0]= new CreateControlPuckPositive();
	magnitudes[0].create(locpucks[0],locpucks[1]);

	boxesbutton = createCheckbox("trade-off",false);
	boxesbutton.position(494, 374);
	boxesbutton.class("PDLbutton");
}

function draw() {
	background(CWHITE);


	values[0] = createVector(magnitudes[0].getValues().xSet,magnitudes[0].getValues().ySet).mult(scaleFactor);

	placeWords("set quantities", locpucks[0]-40,locpucks[1]-45);
	placeWords("current", locpucks[0],locpucks[1]+61);
	placeWords("pd", locpucks[0]+50, locpucks[1]);


push();
		translate(350, 80);
		push();
			scale(1.2);
			drawPowerPathway("electrical");
		pop();

		push();
			translate(36,138);
			scale(1.2);
			showPower(values[0].x*values[0].y/1500);
		pop();

	pop();

	if (boxesbutton.checked()){
  drawTradeOff(locpucks[0],locpucks[1]+tradeOffOffset,values[0].x,values[0].y,CCURRENT,CPOTENTIALDIFFERENCE);
}

	push();
		translate(20,80);
		placeSubHead('qualitative: what is calculated',0, 0);
		translate(0,52);
		placeSubHead('quantitative: how much',0, 0);
	pop();

placeTitleBold("Calculating the power in the electrical working pathway");
}

function keyTyped() {
	if (key === "s") {
		saveCanvas("aSnapshot", "png");
	}
	return false;
}

