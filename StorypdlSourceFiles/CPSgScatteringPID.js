// {CPSgScatteringPID}{840}{450}

function preload() {
	chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");
	scatter  = loadImage("../__PDLgraphics/SgScatter.svg");
	scattereyes = loadImage("../__PDLgraphics/SgScatterEyes.svg");
}
function setup() {
    createCanvas(840,450);
}

function draw() {
	background(CWHITE);

	placePhysicalPane(210, 240, 380, 310);
	placeConceptualPane(625, 240, 390, 340);
	placeTransitionIntervene(415, 240, 0);
	image(scatter ,30,98);

	image(scattereyes,426,85);


placeTitleBold("Scattering – the thing can be seen from all angles, but less light goes straight on")

}

function keyTyped() {
	if (key === "s") {
	saveCanvas("aSnapshot", "png");
	}
	return false;
}
