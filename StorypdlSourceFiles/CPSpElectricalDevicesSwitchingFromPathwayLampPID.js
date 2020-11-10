// {CPSpElectricalDevicesSwitchingFromPathwayLampPID}{800}{600}

function preload() {
	chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");
}

function setup(){
	createCanvas(800, 600);
//    noLoop();
	inputtoDivvy=new IanSlider(20,320,100,15,0,[0.7],false);
	twoWayDivvy=new IanSlider(750,320,150,15,0,[0.4],false);
}

function draw() {
	background(cWhite);
	twoWayDivvy.draw();
	inputtoDivvy.draw();
	var bottomslice = twoWayDivvy.getValue(0);
	var topslice = 1-twoWayDivvy.getValue(0);

	 describePowerTwo("electrical","particles","radiation",topslice,bottomslice);

	titleBold('A lamp switches from the electrical pathway');
}

function mousePressed(){
		twoWayDivvy.mousePressed();
		inputtoDivvy.mousePressed();
	}
function mouseReleased(){
		twoWayDivvy.mouseReleased();
		inputtoDivvy.mouseReleased();
	}

function keyTyped() {
	if (key === "s") {
	saveCanvas("aSnapshot", "png");
	}
	return false;
}