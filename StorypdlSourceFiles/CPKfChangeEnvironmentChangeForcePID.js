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
	background(cWhite);
	
	advicedroid(380, 80, "See how varying the environment affects the forces exerted on the object for each group of forces.", 120, 140);

	wordsframe("Support forces: tension, compression, buoyancy.", 40, 295, 100, 100);
	wordsframe("Frictional forces:\ngrip, slip, drag.", 150, 295, 100, 100);
	wordsframe("Non-contact forces: gravity, magnetic, electric.", 268, 295, 100, 100);
	
	push();
		translate(60, 100);
		force(3, 0, ctension);
		translate(0, 80);
		force(4, 0, ccompression);
		translate(0, 80);
		force(5, 0, cbuoyancy);
	pop();
	
	push();
		translate(170, 100);
		force(5, 90, cgrip);
		translate(0, 80);
		force(-4, 90, cslip);
		translate(0, 80);
		force(3, 90, cdrag);
	pop();
	
	push();
		translate(278, 100);
		force(4, 180, cgravity);
		translate(0, 80);
		force(-5, 0, cmagnetic);
		translate(0, 80);
		force(3, 180, celectric);
	pop();


	titleBold("Change the environment: change the force");
}

function keyTyped() {
	if (key === "s") {
	saveCanvas("aSnapshot", "png");
	}
	return false;
}
