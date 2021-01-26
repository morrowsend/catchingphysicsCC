// {CPSgLuminousPID}{660}{760}

function preload() {
	chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");
	pane1 = loadImage("../__PDLgraphics/SgLuminousPane1.svg");
	pane2 = loadImage("../__PDLgraphics/SgLuminousPane2.svg");
	pane3 = loadImage("../__PDLgraphics/SgLuminousPane3.svg");
}
function setup() {
    createCanvas(660,700);
    advicebutton = new CreateCheckButton(440+72, 80-8,"tell me more",false);

}

function draw() {
	background(CWHITE);
	advicebutton.drawButton();


	placePhysicalPane(210, 160, 380, 180);
	placePhysicalPane(210, 160+180+30, 380, 180);
	placeConceptualPane(210, 160+180+30+180+30, 380, 180);
	placeTransitionRedescribe(210,160+90+15,0);
	placeTransitionRedescribe(210,160+90+15+180+30,0);

//pane 01 contents
	push();
		translate(30, 40);
		image(pane1,40,30);
		placeWords("concentrate on what's seen and who does the seeing", 2, 200);
	pop();

//pane 02 contents
	push();
		translate(40, 260);
		image(pane2,77,60);
		placeWords("see this", 20, 45);
		placeWords("with this eye", 238, 45);
		placeWords("but how?", 159, 145);
	pop();

//pane 03 contents
	push();
		translate(90, 130+350);
		image(pane3,29,40);
		placeWordsFrame("a beam of light travels from candle to eye",110,60,100,140);
		showBeamC(45, 50, 224, 50, CLIGHT);
		translate(224, 50);
		 drawEye(0);
	pop();

//advice
if (advicebutton.buttonisChecked){
	placeAdviceDroid(590,90+40,"Here is a physics story. First select what you want to describe.\n\n\n Then sketch it again, with simplified things, being even more selective.\n\n\n\n\n\n\n\n\n Finally into the world of physics, now drawing with different kinds of things, such as beams of light. ", 200, 390);
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
