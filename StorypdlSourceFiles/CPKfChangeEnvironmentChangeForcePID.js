// CPKfChangeEnvironmentChangeForcePID

function preload() {
	chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");
}

function setup(){
	createCanvas(450, 420);
	noLoop();
}

function draw() {
	background(CWHITE);
	
	placeAdviceDroid(380, 80, "See how varying the environment affects the forces exerted on the object for each group of forces.", 120, 140);

	placeWordsFrame("Support forces: tension, compression, buoyancy.", 40, 295, 100, 100);
	placeWordsFrame("Frictional forces:\ngrip, slip, drag.", 150, 295, 100, 100);
	placeWordsFrame("Non-contact forces: gravity, magnetic, electric.", 268, 295, 100, 100);
	
	push();
		translate(60, 100);
		showForce(3, 0, CTENSION);
		translate(0, 80);
		showForce(4, 0, CCOMPRESSION);
		translate(0, 80);
		showForce(5, 0, CBUOYANCY);
	pop();
	
	push();
		translate(170, 100);
		showForce(5, 90, CGRIP);
		translate(0, 80);
		showForce(-4, 90, CSLIP);
		translate(0, 80);
		showForce(3, 90, CDRAG);
	pop();
	
	push();
		translate(278, 100);
		showForce(4, 180, CGRAVITY);
		translate(0, 80);
		showForce(-5, 0, CMAGNETIC);
		translate(0, 80);
		showForce(3, 180, CELECTRIC);
	pop();


	placeTitleBold("Change the environment: change the force");
}

function keyTyped() {
	if (key === "s") {
	saveCanvas("aSnapshot", "png");
	}
	return false;
}
