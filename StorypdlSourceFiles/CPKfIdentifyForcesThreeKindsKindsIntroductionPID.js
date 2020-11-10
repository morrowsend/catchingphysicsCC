// CPKfIdentifyForcesThreeKindsKindsIntroductionPID

function preload() {
	chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");

}
function setup(){
	createCanvas(650, 450);
	noLoop();
}
function draw() {
	background(cWhite);
	
	advicedroid(580, 80, "Three groups of kinds of forces, each kind depending on particular interactions with the environment of the object.\n\nCheck the interactions to identify the forces.", 150, 200);
	
	
// 	support
	push();
		translate(100, 150);
		mass(3, cideaGrey);
		push();
			translate(0, 15);
			force(5, 0, cbuoyancy);
		pop();
		words("buoyancy", -15,30);
		translate(150, 0);
		mass(3, cideaGrey);
		push();
			translate(0, -15);
			force(6, 0, ctension);
		pop();
		words("tension", -15,30);
		translate(150, 0);
		mass(3, cideaGrey);
		push();
			translate(0, 15);
			force(8, 0, ccompression);
		pop();
		words("compression", -15,30);
	pop();
// 	frictional
	push();
	translate(100, 260);
	mass(3, cideaGrey);
	push();
		translate(0, 15);
		force(5, 90, cgrip);
	pop();
		words("grip", -15,40);
		translate(150, 0);
		mass(3, cideaGrey);
		push();
			translate(0, 15);
			force(7, 90, cslip);
		pop();
		words("slip", -15,40);
		translate(150, 0);
		mass(3, cideaGrey);
		push();
			translate(15, 0);
			force(5, 90, cdrag);
		pop();
		words("drag", -15,40);
	pop();
// non-contact
	push();
		translate(100, 380);
		mass(3, cideaGrey);
		force(5, 180, celectric);
		words("electrical", -15,-30);
		translate(150, 0);
		mass(3, cideaGrey);
		force(5, 180, cmagnetic);
		words("magnetic", -15,-30);
		translate(150, 0);
		mass(3, cideaGrey);
		force(5, 180, cgravity);
		words("gravity", -15,-30);
	pop();


	titleBold("Forces in three groups: forces of nine kinds");
}
