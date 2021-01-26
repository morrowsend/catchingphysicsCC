// CPKfIdentifyForcesThreeKindsSupportPID

function preload() {
	chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");

	situationT = loadImage("../__PDLgraphics/Kfisolaterockbandsituation.svg");
	situationC = loadImage("../__PDLgraphics/Kfisolaterockbottomsituation.svg");

	
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
	image(situationT,120,200);
	image(situationC,120,430);
	
	push();
	translate(300, 200);
	showMass(3, CIDEABROWN);
	push();
		translate(0, 15);
		showForce(5, 0, CBUOYANCY);
	pop();
	placeWords("buoyancy", -15,30);
	translate(150, 0);
	showMass(3, CIDEABROWN);
	push();
		translate(0, -15);
		showForce(6, 0, CTENSION);
	pop();
	placeWords("tension", -15,30);
	pop();
	
	push();
	translate(300, 430);
	showMass(3, CIDEABROWN);
	push();
		translate(0, 15);
		showForce(5, 0, CBUOYANCY);
	pop();
	placeWords("buoyancy", -15,30);
	translate(150, 0);
	showMass(3, CIDEABROWN);
	push();
		translate(0, 15);
		showForce(8, 0, CCOMPRESSION);
	pop();
	placeWords("compression", -15,30);
	pop();
	
justplaceWords("Support forces: tension; compression; buoyancy ","thinkingL",20,height-60,400);

	placeTitleBold("The situation: an object is supported by its environment");
}
