// CPKfExtractTensionPID

function preload() {
chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");
	situation = loadImage("../__PDLgraphics/Kfisolaterockband.svg");
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
		translate(0,-15);
	   force(5,0,ctension);
		pop();

	advicedroid(480, 80, "To identify tension forces on something, first notice any stetching of the surroundings.\n\n\nIsolate the thing from the surroundings.\nReplace each instance of stretching with an arrow, coloured to show a tension force. Draw the arrow longer for a larger force.", 280, 180);

	titleBold("Identifying tension forces: notice, then extract");
}
