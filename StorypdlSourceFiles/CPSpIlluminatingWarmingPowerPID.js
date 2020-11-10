// {CPSpIlluminatingWarmingPowerPID}{356}{280}

function preload() {
	chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");
}

function setup(){
    createCanvas(356,280);
	magnitudes= new controlPuckpositive();
	magnitudes.create(60,130);
}

function draw() {
    background(cWhite);
    values = createVector(magnitudes.getValues().xSet,magnitudes.getValues().ySet).mult(20);

	words("set values...", 20,85);
	words("activity", 53,191);
	words("frequency", 110, 102);

	push();
		translate(160,218);
		quantum(values.x);
		translate(80,0);
		quantity(values.y,cactivity,"");
    pop();

	push();
		translate(304,128);
		power(values.x*values.y/18);
    pop();

   titleBold("Illuminating or warming and power");
}

function keyTyped() {
	if (key === "s") {
	saveCanvas("aSnapshot", "png");
	}
	return false;
}
