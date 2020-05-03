// filename: CgSimpleCircuitPID

function preload() {
	chatterFont= loadFont("../../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../../__support/ComicNeue-Angular-Bold.ttf");
	circuit = loadImage("../__PDLgraphics/CgSimpleLabCircuit.png");
}
function setup() {
    createCanvas(660,500);
    advicebutton = new checkButton(660-147, 80,"tell me more",false);
    
}

function draw() {
	background(cWhite);
	advicebutton.drawButton();
	
	image(circuit,30,70);
	
//advice
if (advicebutton.buttonisChecked){
	advicedroid(590,140,"Trace out the loop with your fingers, starting anywhere. Check that there is only one loop.", 140, 90);
	leadlinediagram("battery", 60+54, 200+138);
	leadlinediagram("lamp", 60+54+273, 200+138);
	leadlinediagram("wire", 376, 153);
	leadlinediagram("wire", 376-74, 153-56);
	}

titleBold("A simple school circuit")
	 
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
