// {CPKfExtractSlipPID}{550}{400}

function preload() {
chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");
	situation = loadImage("../__PDLgraphics/KfIsolateDrag.svg");
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
		translate(120, 280);
		showMass(3,CDEVICEGREY);
		translate(0,15);
	   showForce(7,270,CSLIP);
	   translate(-60,-40);
	   showVelocity(12, 90, CDEVICEGREY);
		pop();

	placeAdviceDroid(480, 80, "To identify slip forces on something, first notice any movement past rough surfaces it is touching.\n\n\nIsolate the thing from the surroundings.\nReplace each instance of such slip over rough surfaces with an arrow, coloured to show a slip force. Draw the arrow longer for a larger force.", 280, 180);

	placeTitleBold("Identifying slip forces: notice, then extract");
}
