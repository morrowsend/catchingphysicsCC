// {CPKfExtractElectricPID}{550}{400}

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
	fill(celectric);
	noStroke();
	ellipse(0,0,50,50);
	words("+ +", -10, 0);
	pop();

	push();
		translate(120, 280);
		noStroke();
		fill(cdeviceGrey);
		ellipse(0,0,30,30);
		// mass(3,cdeviceGrey);
	   force(7,90,celectric);
		pop();

	advicedroid(480, 80, "To identify electric forces on a charged something, first notice any charged objects not too far away.\n\n\nIsolate the thing from the surroundings.\nReplace each charged object with an arrow, coloured to show a electric force. Draw the arrow longer for a larger force.", 280, 180);

	titleBold("Identifying electric forces: notice, then extract");
}
