// {CPKfExtractMagneticPID}{550}{450}

function preload() {
chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");
	situation = loadImage("../__PDLgraphics/Kfisolateobject.svg");
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
	translate(50,150);
	scale(0.5);
	magnet(90, false);
	pop();

	push();
		translate(120, 280);
		noStroke();
		fill(cdeviceGrey);
		ellipse(0,0,30,30);
	   force(7,90,cmagnetic);
		pop();

	advicedroid(480, 80, "To identify magnetic forces on a magentic something, first notice any magnets not too far away.\n\n\nIsolate the thing from the surroundings.\nReplace each magnet with an arrow, coloured to show a magnetic force. Draw the arrow longer for a larger force.", 280, 180);

	titleBold("Identifying magnetic forces: notice, then extract");
}
