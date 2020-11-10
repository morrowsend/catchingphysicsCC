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
	background(cWhite);
		
	physicalPane(120, 200, 200, 200);
	conceptualPane(400, 200, 300, 200);
	transitionRedescribe(235, 200,0);
	
	physicalPane(120, 430, 200, 200);
	conceptualPane(400, 430, 300, 200);
	transitionRedescribe(235, 430,0);
	
	imageMode(CENTER);
	image(situationT,120,200);
	image(situationC,120,430);
	
	push();
	translate(300, 200);
	mass(3, cideaBrown);
	push();
		translate(0, 15);
		force(5, 0, cbuoyancy);
	pop();
	words("buoyancy", -15,30);
	translate(150, 0);
	mass(3, cideaBrown);
	push();
		translate(0, -15);
		force(6, 0, ctension);
	pop();
	words("tension", -15,30);
	pop();
	
	push();
	translate(300, 430);
	mass(3, cideaBrown);
	push();
		translate(0, 15);
		force(5, 0, cbuoyancy);
	pop();
	words("buoyancy", -15,30);
	translate(150, 0);
	mass(3, cideaBrown);
	push();
		translate(0, 15);
		force(8, 0, ccompression);
	pop();
	words("compression", -15,30);
	pop();
	
justWords("Support forces: tension; compression; buoyancy ","thinkingL",20,height-60,400);

	titleBold("The situation: an object is supported by its environment");
}
