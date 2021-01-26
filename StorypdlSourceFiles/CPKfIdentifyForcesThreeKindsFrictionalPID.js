// CPKfIdentifyForcesThreeKindsFrictionalPID

function preload() {
	chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");

	situation = loadImage("../__PDLgraphics/KfIsolateDrag.svg");
}
function setup(){
	createCanvas(570, 600);
	noLoop();
}
function draw() {
	background(CWHITE);
		
	placePhysicalPane(120, 200, 200, 200);
	placeConceptualPane(400, 200, 300, 200);
	placeTransitionRedescribe(235, 200,0);
	
	placePhysicalPane(120, 430, 200, 200);
	placeConceptualPane(400, 430, 300, 200);
	placeTransitionRedescribe(235, 430,0);
	
	imageMode(CENTER);
	image(situation,120,200);
	image(situation,120,430);
	placeWords('object not moving', 70, 270);
	placeWords('object moving', 70, 500);
	
	push();
	translate(400, 200);
	showMass(3, CIDEABROWN);
	push();
		translate(0, 15);
		showForce(5, -90, CGRIP);
	pop();
	placeWords("grip", -15,40);
	pop();
	
	push();
	translate(320, 430);
	showMass(3, CIDEABROWN);
	push();
		translate(0, 15);
		showForce(5, -90, CSLIP);
	pop();
	placeWords("slip", -15,40);
	translate(150, 0);
	showMass(3, CIDEABROWN);
	push();
		translate(-15, 0);
		showForce(8, -90, CDRAG);
	pop();
	placeWords("drag", -15,40);
	pop();
	
justplaceWords("Fricional forces: grip; slip; drag ","thinkingL",20,height-60,400);

	placeTitleBold("The situation: an object is being dragged in an environment");
}
