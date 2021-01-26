// {CPKfIsolateForcesRockPondBandRemoteobjectgravityPID}{750}{450}

function preload() {
chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");
	justrock = loadImage("../__PDLgraphics/Kfisolateobject.svg");
}

function setup(){
	createCanvas(750, 450);
	noLoop();
}

function draw() {
	background(CWHITE);

	placePhysicalPane(250, 250, 200, 350);
	placeConceptualPane(480, 250, 200, 350);
	placeTransitionRedescribe(365, 250,0);
	imageMode(CENTER);
	image(justrock,250,250);

	push();
	translate(480, 250);
	showMass(4, CIDEABROWN);
	showForce(17, 180, CGRAVITY);
	pop();


	placeTitleBold("Interactions between Earth and the rock replaced by a gravity force");
}
