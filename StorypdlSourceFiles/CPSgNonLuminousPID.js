// {CPSgNonLuminousPID}{660}{700}



function preload() {
	chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");

	incident = loadImage("../__PDLgraphics/SgNonLuminousIncident.svg");
	reflected = loadImage("../__PDLgraphics/SgNonLuminousReflected.svg");
}
function setup() {
    createCanvas(660,700);
    advicebutton = new CreateCheckButton(440, 80,"tell me more",false);

}

function draw() {
	background(CWHITE);
	advicebutton.drawButton();


	placeConceptualPane(210, 160, 380, 180);
	placeConceptualPane(210, 160+180+30, 380, 180);
	placeConceptualPane(210, 160+180+30+180+30, 380, 180);
	placeTransitionEvolve(210,160+90+15,90);
	placeTransitionIntervene(210,160+90+15+180+30,90);

//pane 01 contents
	push();
		translate(30, 40);
		image(incident,0,45);
		placeWords("some light from a luminous source hits a chess piece", 2, 200);
	pop();

//pane 02 contents
	push();
		translate(30, 180+30+40);
		image(reflected,0,45);
		placeWords("some light is reflected", 2, 200);
	pop();

//pane 03 contents
	push();
		translate(30, 180+40+30+180+30);
		image(reflected,0,65);
		placeWordsFrame("nothing seen here",275,30,50,140);
		placeWordsFrame("see it here, light enters your eye",275,100,100,140);

		translate(274-16-40, 60);
		 drawEye(0);
		translate(0, 70);
		 drawEye(0);
	pop();

//advice
if (advicebutton.buttonisChecked){
	placeAdviceDroid(590,500-76,"If light reflected from the chess piece enters your eye you see it.\n\n If light reflected from the chess piece does not enter your eye, you don't see it. ", 200, 140);
	}

placeTitleBold("Seeing something that is luminous")

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
