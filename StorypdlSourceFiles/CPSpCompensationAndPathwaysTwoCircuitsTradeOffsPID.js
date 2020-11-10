// {CPSpCompensationAndPathwaysTwoCircuitsTradeOffsPID}{620}{520}

const magnitudes=[];
var values = [];
const scaleFactor=200;
const pucksinsethorizontal = 160;
const locpucks =[[pucksinsethorizontal,130],[620-pucksinsethorizontal,130]];
const tradeOffOffset = 200;
const powerbarOffset = 320;

function preload() {
	chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");
	}
function setup(){
	createCanvas(620,520);
	for (let i = 0; i<2; i++){
		magnitudes[i]= new controlPuck();
		magnitudes[i].create(locpucks[i][0],locpucks[i][1]);
	}
	boxesbutton = new checkButton(width-132, 192,"trade-offs",false);

}

function draw() {
	background(cWhite);
	boxesbutton.drawButton();
	for (let i = 0; i<2; i++){
	values[i] = createVector(magnitudes[i].getValues().xSet,magnitudes[i].getValues().ySet).mult(scaleFactor);
	}

	words("set first circuit", locpucks[0][0]-40,locpucks[0][1]-45);
	words("current", locpucks[0][0]-5,locpucks[0][1]+58);
	words("pd", locpucks[0][0]+50, locpucks[0][1]-28);

	words("set second circuit", locpucks[1][0]-40,locpucks[1][1]-45);
	words("current", locpucks[1][0]-5,locpucks[1][1]+58);
	words("pd", locpucks[1][0]+50, locpucks[1][1]-28);

		push();
			translate(locpucks[0][0],locpucks[0][1]+powerbarOffset);
			scale(1.2);
			power(values[0].x*values[0].y/1800);
		pop();
		push();
			translate(locpucks[1][0],locpucks[1][1]+powerbarOffset);
			scale(1.2);
			power(values[1].x*values[1].y/1800);
		pop();


	if (boxesbutton.buttonisChecked){
	tradeOff(locpucks[0][0],locpucks[0][1]+tradeOffOffset,values[0].x,values[0].y,ccurrent,cpotentialdifference);
	tradeOff(locpucks[1][0],locpucks[1][1]+tradeOffOffset,values[1].x,values[1].y,ccurrent,cpotentialdifference);
}
   titleBold("Trade offs: set current and pd twice, to get the same power");
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
