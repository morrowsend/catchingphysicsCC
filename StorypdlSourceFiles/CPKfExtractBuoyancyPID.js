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
	background(CWHITE);

	placePhysicalPane(120, 150, 200, 100);
	imageMode(CENTER);
	image(situation,120,150);
	placeConceptualPane(120, 280, 200, 100);
	placeTransitionRedescribe(120, 215, 90);

	push();
	translate(120, 310);
	showMass(3,CDEVICEGREY);
	translate(0,15);
	showForce(9,0,CBUOYANCY);
	pop();

	placeAdviceDroid(480, 80, "To identify buoyancy forces on something, first notice any holes made in the surrounding liquid or gas by the thing.\n\n\nIsolate the thing from the surroundings.\nReplace each such hole with an arrow, coloured to show a buoyancy force. Draw the arrow longer for a larger force.", 280, 180);

	placeTitleBold("Identifying buoyancy forces: notice, then extract");
}
