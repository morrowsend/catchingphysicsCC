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
	background(cWhite);

	physicalPane(120, 200, 200, 200);
	conceptualPane(450, 200, 400, 200);
	transitionRedescribe(235, 200,0);



	imageMode(CENTER);
	image(situation,120,200);


	words('environment contains\ncharges,\nmagnets\nor\nmasses', 30, 120);


	push();
	translate(300, 200);
	mass(3, cideaBrown);
	force(5, 180, celectric);
	words("electrical", -15,-30);
	translate(150, 0);
	mass(3, cideaBrown);
	force(5, 180, cmagnetic);
	words("magnetic", -15,-30);
	translate(150, 0);
	mass(3, cideaBrown);
	force(5, 180, cgravity);
	words("gravity", -15,-30);
	pop();

justWords("Non-contact forces: electric; magnetic; gravitational ","thinkingL",20,height-60,400);

titleBold("The situation: an object in an environment");
}
