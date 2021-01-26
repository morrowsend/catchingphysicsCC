// {CPCgImageDrawingCircuitPID}{750}{330}

function preload() {
	chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");
	circuit = loadImage("../__PDLgraphics/CgSimpleLabCircuit.png");
}
function setup() {
    createCanvas(750,330);
    advicebutton = new CreateCheckButton(603, 65,"tell me more",false);

}

function draw() {
	background(CWHITE);
	advicebutton.drawButton();

	placePhysicalPane(160, 186, 270, 240);
	placeConceptualPane(460, 186, 270, 240);
	placeTransitionRedescribe(310, 186, 0);


// 	pane01
	push();
		translate(30, 70);
		scale(0.6);
		image(circuit,0,0);
	pop();
// 	pane02
	push();
		translate(354,180);
		drawCircuitSimple("bulb");
	pop();

	placeWords("battery", 91, 224);
	placeWords("lamp", 218, 282);
	placeWords("wire", 256, 127);
	placeWords("wire", 206, 89);

//advice
if (advicebutton.buttonisChecked){
	placeAdviceDroid(680,100,"Trace out the loop on both the picture and the drawing. Check that the battery and lamp have the same connections in both.", 127, 134);
	placeWords("battery", 386, 184);
	placeWords("lamp", 507, 184);
	placeWords("wire", 538, 279);
	placeWords("wire", 365, 89);
	}

placeTitleBold("Drawing electrical loops")

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
