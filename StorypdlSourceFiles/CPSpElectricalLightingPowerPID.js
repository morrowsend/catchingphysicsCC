// {CPSpElectricalLightingPowerPID}{506}{340}

function preload() {
	chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");
}

function setup(){
    createCanvas(506,340);
	magnitudes= new controlPuckpositive();
	magnitudes.create(60,130);
}

function draw() {
    background(cWhite);
    values = createVector(magnitudes.getValues().xSet,magnitudes.getValues().ySet).mult(200);

	words("set values...", 20,85);
	words("current", 55,191);
	words("voltage", 110, 102);

	push();
		translate(174,198);
		circuitSimple("bulb");
		translate(280,0);
		power(values.x*values.y/1800);
    pop();

   titleBold("Lighting using an electrical circuit");
}

function keyTyped() {
	if (key === "s") {
	saveCanvas("aSnapshot", "png");
	}
	return false;
}
