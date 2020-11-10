// {CPKfIsolateForcesRockPondBandSituationPID}{550}{260}

function preload() {
	chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");
	situation=loadImage("../__PDLgraphics/Kfisolaterockbandsituation.svg");
}

function setup(){
	createCanvas(550, 260);
	noLoop();
}
function draw() {
	background(cWhite);

	advicedroid(480, 80, "Identifying the forces on the rock. First isolate the rock its environment, then consider the interactions with the environment that it had, but no longer has. Each will be replaced with a force.", 290, 90)

	physicalPane(120, 150, 200, 100);
	imageMode(CENTER);
	image(situation,120,150);


	titleBold("The situation: a rock hanging on a rubber band, in a liquid");
}

