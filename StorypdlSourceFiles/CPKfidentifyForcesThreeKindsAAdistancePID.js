// {CPKfidentifyForcesThreeKindsAAdistancePID}{670}{380}

function preload() {
	chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");

situation = loadImage("../__PDLgraphics/Kfisolateobject.svg");
}
function setup(){
	createCanvas(670, 380);
	noLoop();
}
function draw() {
	background(CWHITE);

	placePhysicalPane(120, 200, 200, 200);
	placeConceptualPane(450, 200, 400, 200);
	placeTransitionRedescribe(235, 200,0);



	imageMode(CENTER);
	image(situation,120,200);


	placeWords('environment contains\ncharges,\nmagnets\nor\nmasses', 30, 120);


	push();
	translate(300, 200);
	showMass(3, CIDEABROWN);
	showForce(5, 180, CELECTRIC);
	placeWords("electrical", -15,-30);
	translate(150, 0);
	showMass(3, CIDEABROWN);
	showForce(5, 180, CMAGNETIC);
	placeWords("magnetic", -15,-30);
	translate(150, 0);
	showMass(3, CIDEABROWN);
	showForce(5, 180, CGRAVITY);
	placeWords("gravity", -15,-30);
	pop();

justplaceWords("Non-contact forces: electric; magnetic; gravitational ","thinkingL",20,height-60,400);

placeTitleBold("The situation: an object in an environment");
}
