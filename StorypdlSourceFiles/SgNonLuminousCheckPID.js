// filename: SgNonLuminousCheckPID

function preload() {
	chatterFont= loadFont("../../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../../__support/ComicNeue-Angular-Bold.ttf");
	reflected = loadImage("../__PDLgraphics/SgNonLuminousReflected.svg");
}
function setup() {
    createCanvas(520,520);
	eyeheight = new controlStripVerticalPositive();
	eyeheight.create(509-30,320);    
}

function draw() {
	background(cWhite);
    var theheight=createVector(eyeheight.getValues().xSet,eyeheight.getValues().ySet);



challengedroid(70,140,"Let's check what you're thinking...", 100, 60);

	push();
		mentondroid(cideaBlue,5,200,350,"Light needs to go into the eye, so...",330,200,"R");
		image(reflected,10,40);
		push();
			translate(240, 168-130*theheight.y);
			eye(0);
		pop();
	pop();
	
	if ((theheight.y>0.13) && (theheight.y<0.63)){
RLdroid(430, 440, "you can see the chess piece, light is entering the eye", 100, 80);
				} else{
WTdroid(410, 440, "oops, no light is entering the eye", 100, 50);
				}

titleBold("Can you see it?")
	 
}


function keyTyped() {
	if (key === "s") {
	saveCanvas("aSnapshot", "png");
	}
	return false;
}
