// {CPSpMechanicalDraggingPowerPID}{356}{280}

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
	placeWords("force", 66,191);
	placeWords("velocity", 110, 102);

	push();
		translate(200,218);
		showForce(values.x, 90, CFORCERED);
		translate(0,30);
		showVelocity(values.y, 90, CFORCEGREEN);
    pop();

	push();
		translate(304,128);
		showPower(values.x*values.y/18);
    pop();

   placeTitleBold("Dragging and power");
}

function keyTyped() {
	if (key === "s") {
	saveCanvas("aSnapshot", "png");
	}
	return false;
}
