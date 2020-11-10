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
	background(cWhite);

	physicalPane(120, 150, 200, 100);
	imageMode(CENTER);
	image(situation,120,150);
	conceptualPane(120, 280, 200, 100);
	transitionRedescribe(120, 215, 90);

	push();
		translate(120, 280);
		mass(3,cdeviceGrey);
		translate(15,0);
	   force(7,270,cdrag);
	   translate(-65,-25);
	   velocity(10, 90, cdeviceGrey);
		pop();

	advicedroid(480, 80, "To identify drag forces on something, first notice any movement through liquid or gas.\n\n\nIsolate the thing from the surroundings.\nReplace each instance of such drag through a fluid with an arrow, coloured to show a drag force. Draw the arrow longer for a larger force.", 280, 180);

	titleBold("Identifying drag forces: notice, then extract");
}
