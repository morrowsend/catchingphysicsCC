// {CPSpFourCalculablePathwaysPID}{400}{320}

function preload() {
	chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");
}

function setup(){
	createCanvas(400,320);
	}

function draw() {
	background(CWHITE);
push();
		translate(40, 80);
		push();
			scale(1.2);
			drawPowerPathway("mechanical");
		pop();
		placeWords("mechanical working", 80,20);
		translate(0,60);
		push();
			scale(1.2);
			drawPowerPathway("electrical");
		pop();
		placeWords("electrical working", 80,20);
		translate(0,60);
		push();
			scale(1.2);
			drawPowerPathway("particles");
		pop();
		placeWords("heating by particles", 80,20);
		translate(0,60);
		push();
			scale(1.2);
			drawPowerPathway("radiation");
		pop();
		placeWords("heating by radiation", 80,20);

		pop()
	placeTitleBold("The four (calculable) pathways");
}

function keyTyped() {
	if (key === "s") {
	saveCanvas("aSnapshot", "png");
	}
	return false;
}
