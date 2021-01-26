// {CPSgNonLuminousCheckPID}{520}{520}

var mentonrep= new Scribble();

function preload() {
	chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");
	reflected = loadImage("../__PDLgraphics/SgNonLuminousReflected.svg");
}
function setup() {
    createCanvas(520,520);
	eyeheight = new CreateControlStripVerticalPositive();
	eyeheight.create(509-30,320);
}

function draw() {
	background(CWHITE);
	randomSeed(99);
    var theheight=createVector(eyeheight.getValues().xSet,eyeheight.getValues().ySet);



placeChallengeDroid(70,140,"Let's check what you're thinking...", 100, 64);

	push();
		placeMentonDroid(CIDEABLUE,5,200,350,"Light needs to go into the eye, so...",330,200,"R");
		image(reflected,10,40);
		push();
			translate(240, 168-130*theheight.y);
			 drawEye(0);
		pop();
	pop();

	if ((theheight.y>0.13) && (theheight.y<0.63)){
placeRightLinesDroid(430, 440, "you can see the chess piece, light is entering the eye", 100, 80);
				} else{
placeWrongTrackDroid(410, 440, "oops, no light is entering the eye", 100, 50);
				}

placeTitleBold("Can you see it?");

}


function keyTyped() {
	if (key === "s") {
	saveCanvas("aSnapshot", "png");
	}
	return false;
}
