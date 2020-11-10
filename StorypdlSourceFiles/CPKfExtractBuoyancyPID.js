// CPKfExtractBuoyancyPID

function preload() {
	chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");
	situation = loadImage("../__PDLgraphics/Kfisolaterockwater.svg");
}

function setup(){
	createCanvas(550, 400);
	noLoop();
}

function draw() {
	background(cWhite);

	physicalPane(120, 150, 200, 100);
	imageMode(CENTER);
	image(situation,120,150);
	conceptualPane(120, 280, 200, 100);
	transitionRedescribe(120, 215, 90);

	push();
	translate(120, 310);
	mass(3,cdeviceGrey);
	translate(0,15);
	force(9,0,cbuoyancy);
	pop();

	advicedroid(480, 80, "To identify buoyancy forces on something, first notice any holes made in the surrounding liquid or gas by the thing.\n\n\nIsolate the thing from the surroundings.\nReplace each such hole with an arrow, coloured to show a buoyancy force. Draw the arrow longer for a larger force.", 280, 180);

	titleBold("Identifying buoyancy forces: notice, then extract");
}
