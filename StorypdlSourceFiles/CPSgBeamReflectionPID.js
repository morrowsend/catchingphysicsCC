// {CPSgBeamReflectionPID}{600}{380}
function preload() {
	chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");
}
function setup(){
    createCanvas(600, 380);
    noLoop();
}

function draw() {
    background(CWHITE);

	push();
		translate(100, 120);
		drawTransducer(CLIGHT, 45);
		showBeamC(0,0,200,200,CLIGHT);
		translate(200, 200);
		showBeamC(0,0,200,-200,CLIGHT);
		drawReflector("good", 90, 100);
		translate(190, -210);
		 drawEye(135-180);
// 		drawTransducer(CBLACK, 135);
	pop();

	placeAdviceDroid(320+210, 60+105+40, "You can see the beam if you put your eye in the correct place.\n\nBut how can you predict where the correct place is?", 210, 108);

	placeTitleBold("A beam of light reflects from a mirror into an eye");
}
