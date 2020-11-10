// {CPSpCompensationCalculationPowerPhotonsPID}{550}{500}

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
	createCanvas(550,500);

	magnitudes[0]= new controlPuckpositive();
	magnitudes[0].create(locpucks[0],locpucks[1]);

	boxesbutton = new checkButton(444, 374,"trade-off",false);

}

function draw() {
	background(cWhite);

	values[0] = createVector(magnitudes[0].getValues().xSet,magnitudes[0].getValues().ySet).mult(scaleFactor);

	boxesbutton.drawButton();

	words("set quantities", locpucks[0]-40,locpucks[1]-45);
	words("photons / second", locpucks[0],locpucks[1]+61);
	words("energy / photon", locpucks[0]+50, locpucks[1]);


push();
		translate(350, 80);
		push();
			scale(1.2);
			powerPathway("radiation");
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
		translate(0,52);
		subHead('quantitative: how much',0, 0);
	pop();

	push();
		translate(308, locpucks[1]);
		quantum(values[0].y/30);
		translate(-64, 130);
		quantity(values[0].x/12,cactivity,"");
	pop();

titleBold("Power and photons: compensation and trade-offs");
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

