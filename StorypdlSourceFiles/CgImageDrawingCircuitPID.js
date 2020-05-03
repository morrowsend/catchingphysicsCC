// filename: CgImageDrawingCircuitPID

function preload() {
	chatterFont= loadFont("../../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../../__support/ComicNeue-Angular-Bold.ttf");
	circuit = loadImage("../__PDLgraphics/CgSimpleLabCircuit.png");
}
function setup() {
    createCanvas(750,330);
    advicebutton = new checkButton(603, 65,"tell me more",false);
    
}

function draw() {
	background(cWhite);
	advicebutton.drawButton();
	
	physicalPane(160, 186, 270, 240);
	conceptualPane(460, 186, 270, 240);
	transitionRedescribe(310, 186, 0);
	
	
// 	pane01
	push();
		translate(30, 70);
		scale(0.6);
		image(circuit,0,0);
	pop();
// 	pane02
	push();
		translate(354,180);
		circuitSimple("bulb");
	pop();
	
	words("battery", 91, 224);
	words("lamp", 218, 282);
	words("wire", 256, 127);
	words("wire", 206, 89);
	
//advice
if (advicebutton.buttonisChecked){
	advicedroid(680,100,"Trace out the loop on both the picture and the drawing. Check that the battery and lamp have the same connections in both.", 127, 134);
	words("battery", 386, 184);
	words("lamp", 507, 184);
	words("wire", 538, 279);
	words("wire", 365, 89);
	}

titleBold("Drawing electrical loops")
	 
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
