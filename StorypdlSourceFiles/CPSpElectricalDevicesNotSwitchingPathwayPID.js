// {CPSpElectricalDevicesNotSwitchingPathwayPID}{600}{600}

function preload() {
	chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");
}

function setup(){
	createCanvas(600, 600);
//    noLoop();
	inputtoDivvy=new createSliderDivider(20,320,100,15,0,[0.7],false);
}

function draw() {
	background(CPANEBLUE);
	inputtoDivvy.draw();
	drawDescribePowerOne("electrical","electrical");
	placeTitleBold('An ideal wire does not switch to or from the electrical pathway');
}

function mousePressed(){
		inputtoDivvy.mousePressed();
	}
function mouseReleased(){
		inputtoDivvy.mouseReleased();
	}