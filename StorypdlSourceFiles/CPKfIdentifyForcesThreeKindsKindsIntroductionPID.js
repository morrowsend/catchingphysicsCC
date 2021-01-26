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
	background(CWHITE);
	
	placeAdviceDroid(580, 80, "Three groups of kinds of forces, each kind depending on particular interactions with the environment of the object.\n\nCheck the interactions to identify the forces.", 150, 200);
	
	
// 	support
	push();
		translate(100, 150);
		showMass(3, CIDEAGREY);
		push();
			translate(0, 15);
			showForce(5, 0, CBUOYANCY);
		pop();
		placeWords("buoyancy", -15,30);
		translate(150, 0);
		showMass(3, CIDEAGREY);
		push();
			translate(0, -15);
			showForce(6, 0, CTENSION);
		pop();
		placeWords("tension", -15,30);
		translate(150, 0);
		showMass(3, CIDEAGREY);
		push();
			translate(0, 15);
			showForce(8, 0, CCOMPRESSION);
		pop();
		placeWords("compression", -15,30);
	pop();
// 	frictional
	push();
	translate(100, 260);
	showMass(3, CIDEAGREY);
	push();
		translate(0, 15);
		showForce(5, 90, CGRIP);
	pop();
		placeWords("grip", -15,40);
		translate(150, 0);
		showMass(3, CIDEAGREY);
		push();
			translate(0, 15);
			showForce(7, 90, CSLIP);
		pop();
		placeWords("slip", -15,40);
		translate(150, 0);
		showMass(3, CIDEAGREY);
		push();
			translate(15, 0);
			showForce(5, 90, CDRAG);
		pop();
		placeWords("drag", -15,40);
	pop();
// non-contact
	push();
		translate(100, 380);
		showMass(3, CIDEAGREY);
		showForce(5, 180, CELECTRIC);
		placeWords("electrical", -15,-30);
		translate(150, 0);
		showMass(3, CIDEAGREY);
		showForce(5, 180, CMAGNETIC);
		placeWords("magnetic", -15,-30);
		translate(150, 0);
		showMass(3, CIDEAGREY);
		showForce(5, 180, CGRAVITY);
		placeWords("gravity", -15,-30);
	pop();


	placeTitleBold("Forces in three groups: forces of nine kinds");
}
