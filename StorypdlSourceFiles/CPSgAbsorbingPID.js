// SgAbsorbingPID

function preload() {
	chatterFont= loadFont("../../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../../__support/ComicNeue-Angular-Bold.ttf");
	absorb  = loadImage("../__PDLgraphics/SgAbsorb.svg");
	absorbeyes = loadImage("../__PDLgraphics/SgAbsorbEye.svg");
}
function setup() {
    createCanvas(840,450);   
}

function setup() {
    createCanvas(840,450);   
}

function draw() {
	background(cWhite);
	
	physicalPane(210, 240, 380, 310);
	conceptualPane(625, 240, 390, 340);
	transitionIntervene(415, 240, 0);

	image(absorb ,28,98);
	wordsframe("it's bright because all of the light reaches the eye", 28, 240, 120, 100);
	
	image(absorbeyes,430,85);
	wordsframe("it's less bright because less of the light reaches the eye", 438, 240, 120, 100);

titleBold("Absorbing – less light carries on")
	 
}

function keyTyped() {
	if (key === "s") {
	saveCanvas("aSnapshot", "png");
	}
	return false;
}
