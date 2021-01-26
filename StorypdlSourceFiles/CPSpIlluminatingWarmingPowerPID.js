// {CPSpIlluminatingWarmingPowerPID}{356}{280}

function preload() {
	chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");
}

function setup(){
    createCanvas(356,280);
	magnitudes= new CreateControlPuckPositive();
	magnitudes.create(60,130);
}

function draw() {
    background(CWHITE);
    values = createVector(magnitudes.getValues().xSet,magnitudes.getValues().ySet).mult(20);

	placeWords("set values...", 20,85);
	placeWords("activity", 53,191);
	placeWords("frequency", 110, 102);

	push();
		translate(160,218);
		showQuantum(values.x);
		translate(80,0);
		showQuantity(values.y,CACTIVITY,"");
    pop();

	push();
		translate(304,128);
		showPower(values.x*values.y/18);
    pop();

   placeTitleBold("Illuminating or warming and power");
}

function keyTyped() {
	if (key === "s") {
	saveCanvas("aSnapshot", "png");
	}
	return false;
}
