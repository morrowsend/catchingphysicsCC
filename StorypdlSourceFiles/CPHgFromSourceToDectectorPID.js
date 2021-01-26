// {CPHgFromSourceToDectectorPID}{670}{450}

function preload() {
   chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
   romanFont= loadFont("../__support/ComicNeue-Angular-Light.ttf");
   italicFont= loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
   titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");
}

function setup(){
    createCanvas(670, 340);
    noLoop();
}

function draw() {
    background(CWHITE);
	placeConceptualPane(170, 200, 300, 230);
	placeConceptualPane(500, 200, 300, 230);
	push();
		translate(90, 200);
		drawTransducer(CSOUND, 0);
		showBeamC(0, 0, 180, 0, CSOUND);
	pop();
	placeTransitionEvolve(335, 200, 0);
	push();
		translate(580, 200);
		drawTransducer(CBLACK, 180);
		showBeamC(-180, 0, 0, 0, CSOUND);
	pop();

	placeWords("a source radiating vibrations",40,115);
	placeWords("a detector absorbing vibrations",370,115);

  placeTitleBold("From source – a delay – to detector");
}

function keyTyped() {
	if (key === "s") {
	saveCanvas("aSnapshot", "png");
	}
	return false;
}






