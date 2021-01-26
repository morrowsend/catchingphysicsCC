// {CPSpElectricalWarmingPowerPID}{506}{340}

function preload() {
	chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");
}

function setup(){
    createCanvas(506,340);
	magnitudes= new CreateControlPuckPositive();
	magnitudes.create(60,130);
}

function draw() {
    background(CWHITE);
    values = createVector(magnitudes.getValues().xSet,magnitudes.getValues().ySet).mult(200);

	placeWords("set values...", 20,85);
	placeWords("current", 55,191);
	placeWords("voltage", 110, 102);

	push();
		translate(174,198);
		drawCircuitSimple("resistor");
		translate(280,0);
		showPower(values.x*values.y/1800);
    pop();

   placeTitleBold("Warming using an electrical circuit");
}

function keyTyped() {
	if (key === "s") {
	saveCanvas("aSnapshot", "png");
	}
	return false;
}
