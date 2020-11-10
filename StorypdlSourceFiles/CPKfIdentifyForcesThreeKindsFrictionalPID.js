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
	background(cWhite);
		
	physicalPane(120, 200, 200, 200);
	conceptualPane(400, 200, 300, 200);
	transitionRedescribe(235, 200,0);
	
	physicalPane(120, 430, 200, 200);
	conceptualPane(400, 430, 300, 200);
	transitionRedescribe(235, 430,0);
	
	imageMode(CENTER);
	image(situation,120,200);
	image(situation,120,430);
	words('object not moving', 70, 270);
	words('object moving', 70, 500);
	
	push();
	translate(400, 200);
	mass(3, cideaBrown);
	push();
		translate(0, 15);
		force(5, -90, cgrip);
	pop();
	words("grip", -15,40);
	pop();
	
	push();
	translate(320, 430);
	mass(3, cideaBrown);
	push();
		translate(0, 15);
		force(5, -90, cslip);
	pop();
	words("slip", -15,40);
	translate(150, 0);
	mass(3, cideaBrown);
	push();
		translate(-15, 0);
		force(8, -90, cdrag);
	pop();
	words("drag", -15,40);
	pop();
	
justWords("Fricional forces: grip; slip; drag ","thinkingL",20,height-60,400);

	titleBold("The situation: an object is being dragged in an environment");
}
