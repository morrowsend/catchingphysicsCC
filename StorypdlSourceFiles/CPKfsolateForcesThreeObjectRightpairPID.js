// {CPKfsolateForcesThreeObjectRightpairPID}{700}{500}
function preload() {
	chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");

	RHpair = loadImage("../__PDLgraphics/KfThreeObjectsRH.svg")
}
function setup(){
	createCanvas(700, 550);
}
function draw() {
	background(CWHITE);

	placePhysicalPane(120, 300, 180, 120);
	placeConceptualPane(390, 190, 300, 200);
	placeConceptualPane(390, 410, 300, 200);
	placeTransitionRedescribe(225, 260,0);
	placeTransitionRedescribe(225, 340,0);


	imageMode(CENTER);
	image(RHpair,120,300);

	push();
	translate(300, 150);
	showMass(4, CIDEARED);
	showForce(12, 90, CIDEABROWN);
	placeWords('Force\nexerted by\nthe brown object\nacting on\nthe red object.', 20, 40)
	pop();

	push();
	translate(480, 370);
	showMass(4, CIDEABROWN);
	showForce(12, -90, CIDEARED);
	placeWords('Force\nexerted by\nthe red object\nacting on\nthe brown object.', -118, 40)
	pop();



	placeTitleBold("The right-hand pair of objects: two linked diagrams – one for each object");
}
