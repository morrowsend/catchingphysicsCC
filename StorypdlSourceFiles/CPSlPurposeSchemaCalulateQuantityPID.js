// {CPSlPurposeSchemaCalulateQuantityPID}{750}{620}

function preload() {
	chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");

}

function setup(){
    createCanvas(750, 620);
    feedbackbutton = new CreateCheckButton(20, 570,"connect insight to purpose     ",false);
}

function draw() {
feedbackbutton.drawButton();

placeRightLinesDroid(620, 196,"Describe process and work out what question you want to answer",170,70);
    placePhysicalPane(118, 130, 150, 110);
    placePhysicalPane(143, 310, 200, 110);
    placeConceptualPane(143, 490, 200, 110);
    placePhysicalPane(388, 490, 150, 110);

    placeTransitionStep(118, 220, 90);
	placeTransitionRedescribe(118, 400, 90);
    placeTransitionStep(278, 490, 0);

//     step actions

		placeWords("For this\nchange, what's the\nvalue of a\nparticular quantity?", 53, 100);
		placeWords("Say what happens,\nset snapshots and figure\nout what to measure\nso you can calculate", 53, 280);
		placeWords("Calculate the change in\nenergy, twice", 53, 460);
		placeWords("Find the value: is it\na maximum\nor a minimum?", 323, 460);
	push();
		translate(75, 529);
		showEnergy(2);
		translate(138, 0);
		showEnergy(2);
	pop();
	placeLinkArrowRight(95, 520, 99,CWHITE);
	placeWords(" = ", 121, 524);



if (feedbackbutton.buttonisChecked){
	placeLinkBarRight(460, 490, 80,CENERGY);
	placeLinkBarUp(540, 490, 360,CENERGY);
	placeLinkArrowLeft(540, 130, 345,CENERGY)
	placeRightLinesDroid(620, 390,"Was your calculation helpful? Could you find the value of the quantity?",170,70);
}


   placeTitleBold("Equate energies to calculate the value of a quantity");
}

function mouseReleased(){
	feedbackbutton.changeState();
	}

function keyTyped() {
	if (key === "s") {


	saveCanvas("aSnapshot", "png");
	}
	return false;
}
