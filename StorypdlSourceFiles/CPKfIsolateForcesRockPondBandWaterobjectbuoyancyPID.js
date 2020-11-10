// {CPKfIsolateForcesRockPondBandWaterobjectbuoyancyPID}{750}{450}

function preload() {
chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");
	rockwater = loadImage("../__PDLgraphics/Kfisolaterockwater.svg");
}

function setup(){
	createCanvas(750, 450);
	noLoop();
}

function draw() {
	background(cWhite);

	physicalPane(250, 250, 200, 350);
	conceptualPane(480, 250, 200, 350);
	transitionRedescribe(365, 250,0);
	imageMode(CENTER);
	image(rockwater,250,245);

	push();
	translate(480, 250);
	mass(4, cideaBrown);
	translate(0, 20);
	force(8, 0, cbuoyancy);
	pop();


	titleBold("Interactions between the water and the rock replaced by a buoyancy force");
}
