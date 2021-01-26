// CPKfIsolateForcesRockPondBandEnvironmentobjectPID

function preload() {
chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");
loadImage("../__PDLgraphics/Kfisolaterockbandsituation.svg");
	environment = loadImage("../__PDLgraphics/Kfisolaterockbandenvironment.svg");
	situation = loadImage("../__PDLgraphics/Kfisolaterockbandsituation.svg");
	object = loadImage("../__PDLgraphics/Kfisolateobject.svg");
}

function setup(){
	createCanvas(500, 500);
	noLoop();
}

function draw() {
	background(CWHITE);

	placePhysicalPane(250, 150, 200, 100);
	placePhysicalPane(250, 280, 200, 100);
	placePhysicalPane(250, 410, 200, 100);
	placeTransitionIntervene(250, 215,-90);
	placeTransitionIntervene(250, 345,90);
	imageMode(CENTER);
	image(environment,250,150);
	image(situation,250,280);
	image(object,250,410);
	

	placeTitleBold("Object separated from environment");
}
