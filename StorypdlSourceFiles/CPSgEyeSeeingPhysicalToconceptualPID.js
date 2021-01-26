// {CPSgEyeSeeingPhysicalToconceptualPID}{660}{450}

function preload() {
	chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");
	lighteye = loadImage("../__PDLgraphics/SgTrafficlight.svg");
}
function setup() {
    createCanvas(660,450);
    advicebutton = new CreateCheckButton(440, 90,"tell me more",false);
}

function draw() {
	background(CWHITE);
	advicebutton.drawButton();

	placePhysicalPane(200, 180, 320, 180);
	placeConceptualPane(200, 350, 360, 100);
	placeTransitionRedescribe(200,285,0);

//pane 01 contents
	push();
		translate(30, 80);
		image(lighteye,20,40);
		placeWords("to see this", 20, 30);
		placeWords("with this eye", 238, 30);
		placeWords("...something has to travel between them,\ncarrying some information about what's seen", 20, 150);
		translate(274,84);
		 drawEye(0);
	pop();

//pane 02 contents
	push();
		translate(90, 350);
		drawTransducer(CLIGHT, 0);
		showBeamC(0, 0, 224, 0, CLIGHT);
		translate(224, 0);
		drawTransducer(CABSORB, 180);
	pop();

//advice
if (advicebutton.buttonisChecked){
	placeAdviceDroid(590,140,"The green pane shows the everyday, the lived-in world.\n\n\nThis is re-imagined in the blue pane, the simple world of physics.\n\n a source  a light beam  a detector.", 200, 170)
	}

placeTitleBold("Seeing – the story of a journey")

}

function mouseReleased(){
	advicebutton.changeState();
}

function keyTyped() {
	if (key === "s") {
	saveCanvas("aSnapshot", "png");
	}
	return false;
}
