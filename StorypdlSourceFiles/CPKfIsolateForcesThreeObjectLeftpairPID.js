// {CPKfIsolateForcesThreeObjectLeftpairPID}{700}{550}
function preload() {
	chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");

	LHpair = loadImage("../__PDLgraphics/KfThreeObjectsLH.svg")
}
function setup(){
	createCanvas(700, 550);
}
function draw() {
	background(cWhite);

	physicalPane(120, 300, 180, 120);
	conceptualPane(390, 190, 300, 200);
		conceptualPane(390, 410, 300, 200);
	transitionRedescribe(225, 260,0);
	transitionRedescribe(225, 340,0);


	imageMode(CENTER);
	image(LHpair,120,300);

	push();
	translate(300, 150);
	mass(4, cideaGreen);
	force(12, 90, cideaRed);
	words('Force\nexerted by\nthe red object\nacting on\nthe green object.', 20, 40)
	pop();

	push();
	translate(480, 370);
	mass(4, cideaRed);
	force(12, -90, cideaGreen);
	words('Force\nexerted by\nthe green object\nacting on\nthe red object.', -118, 40)
	pop();



	titleBold("The left-hand pair of objects: two linked diagrams – one for each object");
}
