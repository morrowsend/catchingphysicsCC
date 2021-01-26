// {CPSpIdentifyPathwayRadiationPID}{430}{280}


function preload() {
	chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");
}

function setup(){
	createCanvas(430,280);
	noLoop();
}

function draw() {
	background(CWHITE);

	push();
		translate(20,80);
		placeSubHead('qualitative: what is calculated',0, 0);
		placeWordsFrame("Look for photons beng emitted or absorbed.", 10,10,232,60);
		push();
		translate(295, 13);
			scale(1.2);
			drawPowerPathway("radiation");
		pop();
		translate(0,102);
		placeSubHead('quantitative: how much',0, 0);
		placeWordsFrame("You will calculate a power in watts.", 10,10,232,60);
		push();
			translate(333,76);
			scale(1.2);
			showPower(5);
		pop();
	pop();

placeTitleBold("Identifying an heating by radiation pathway");
}

function keyTyped() {
	if (key === "s") {
		saveCanvas("aSnapshot", "png");
	}
	return false;
}

