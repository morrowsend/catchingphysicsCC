// filename: SgShadowsAsEvidencePID

function preload() {
	chatterFont= loadFont("../../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../../__support/ComicNeue-Angular-Bold.ttf");
	hand = loadImage("../__PDLgraphics/SgShadowsHand.svg");
	leaf = loadImage("../__PDLgraphics/SgShadowsLeaf.svg");
	sundial = loadImage("../__PDLgraphics/SgShadowsIsundial.svg");
}
function setup() {
    createCanvas(780,600);   
}

function draw() {
	background(cWhite);

	image(hand,10,60);
	advicedroid(420, 64, "The hand blocks some light: the shadow copies the hand shape because light seems to travel in straight lines.", 200, 90);
	image(leaf,180,240);
	advicedroid(520, 251, "The stick is above the leaf and blocks some sunlight. The shadow on the leaf is the same shape as the stick because light seems to travel in straight lines.", 220, 90);
	image(sundial,314,395);
	advicedroid(710, 430, "Sundials work because light appears to travel in straight lines.", 200, 50);
	
titleBold("Shadows are evidence that light seems to travel in straight lines")
	 
}

function keyTyped() {
	if (key === "s") {
	saveCanvas("aSnapshot", "png");
	}
	return false;
}
