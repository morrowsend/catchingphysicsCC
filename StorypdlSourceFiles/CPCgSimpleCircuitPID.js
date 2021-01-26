// {CPCgSimpleCircuitPID}{660}{500}

function preload() {
	chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");

	circuit = loadImage("../__PDLgraphics/CgSimpleLabCircuit.png");
}
function setup() {
    createCanvas(660,500);
    advicebutton = new CreateCheckButton(513, 80,"tell me more",false);

}

function draw() {
	background(CWHITE);
	advicebutton.drawButton();

	image(circuit,30,70);

//advice
if (advicebutton.buttonisChecked){
	placeAdviceDroid(590,140,"Trace out the loop with your fingers, starting anywhere. Check that there is only one loop.", 140, 90);
	placeLeadLine("battery", 60+54, 200+138);
	placeLeadLine("lamp", 60+54+273, 200+138);
	placeLeadLine("wire", 376, 153);
	placeLeadLine("wire", 376-74, 153-56);
	}

placeTitleBold("A simple school circuit")

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
