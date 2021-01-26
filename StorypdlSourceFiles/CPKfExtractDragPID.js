// {CPKfExtractDragPID}{550}{400}

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
		translate(15,0);
	   showForce(7,270,CDRAG);
	   translate(-65,-25);
	   showVelocity(10, 90, CDEVICEGREY);
		pop();

	placeAdviceDroid(480, 80, "To identify drag forces on something, first notice any movement through liquid or gas.\n\n\nIsolate the thing from the surroundings.\nReplace each instance of such drag through a fluid with an arrow, coloured to show a drag force. Draw the arrow longer for a larger force.", 280, 180);

	placeTitleBold("Identifying drag forces: notice, then extract");
}
