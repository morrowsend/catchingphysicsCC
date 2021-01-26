// {CPKfIsolateForcesRockPondBottomSituationPID}{550}{260}

function preload() {
chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");
	situation = loadImage("../__PDLgraphics/Kfisolaterockbottomsituation.svg");
}

function setup(){
	createCanvas(550, 260);
	noLoop();
}

function draw() {
	background(CWHITE);

	placePhysicalPane(120, 150, 200, 100);
	imageMode(CENTER);
	image(situation,120,150);

	placeAdviceDroid(480, 80, "Identifying the forces on the rock. First isolate the rock its environment, then consider the interactions with the environment that it had, but no longer has. Each will be replaced with a force.", 280, 90);

	placeTitleBold("The situation: a rock rests on the bottom, in a liquid");
}
