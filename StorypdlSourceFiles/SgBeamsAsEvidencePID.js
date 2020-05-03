// filename: SgBeamsAsEvidencePID

function preload() {
	chatterFont= loadFont("../../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../../__support/ComicNeue-Angular-Bold.ttf");
	mountain  = loadImage("../__PDLgraphics/SgBeamsMountain.svg");
	cloud = loadImage("../__PDLgraphics/SgBeamsClouds.svg");
}
function setup() {
    createCanvas(660,450);   
}

function draw() {
	background(cWhite);

	image(mountain ,-108,60);
	advicedroid(460, 64, "The mountain  blocks some sunlight. Where the light can continue, the beam across the face of the mountain has a straight edge because light seems to travel in straight lines.", 260, 90);
	image(cloud,90,240);
	advicedroid(590, 264, "The clouds  block some sunlight. Where the light can continue, the beams have straight edges because light seems to travel in straight lines.", 220, 90);
	
	
titleBold("Light beams are evidence that light seems to travel in straight lines")
	 
}

function keyTyped() {
	if (key === "s") {
	saveCanvas("aSnapshot", "png");
	}
	return false;
}
