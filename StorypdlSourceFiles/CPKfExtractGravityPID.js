// {CPKfExtractGravityPID}{550}{400}

function preload() {
	chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");
	situation = loadImage("../__PDLgraphics/KfGravityisolateobject.svg");
}

function setup(){
	createCanvas(550, 400);
	noLoop();
}

function draw() {
	background(CWHITE);

	placePhysicalPane(120, 150, 200, 100);
	// imageMode(CENTER);
	image(situation,120-14,100);
	placeConceptualPane(120, 280, 200, 100);
	placeTransitionRedescribe(120, 215, 90);

	push();
		translate(120, 280);
		noStroke();
		fill(CDEVICEGREY);
		ellipse(0,0,30,30);
		// showMass(3,CDEVICEGREY);
	   showForce(7,90,CGRAVITY);
	pop();

	placeAdviceDroid(480, 80, "To identify gravity forces on something, first notice any massive objects not too far away.\n\n\nIsolate the thing from the surroundings.\nReplace each massive object with an arrow, coloured to show a gravity force. Draw the arrow longer for a larger force.", 280, 180);

	placeTitleBold("Identifying gravity forces: notice, then extract");
}
