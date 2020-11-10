// {CPKfIsolateForcesThreeObjectThreeobjectsPID}{570}{320}

function preload() {
	chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");
	situation = loadImage("../__PDLgraphics/KfThreeObjectsAll.svg");
}

function setup(){
	createCanvas(570, 320);
	noLoop();
}

function draw() {
	background(cWhite);

	physicalPane(170, 190, 300, 200);

	advicedroid(500, 90, "Here are three interacting objects.\n\nSee how to build a good description of the forces exerted by and acting on these objects as a result of the interactions between the objects.", 216, 128);

	imageMode(CENTER);
	image(situation,170,190);

	titleBold("Three interacting objects");
}
