// {CPSlPurposeSchemaEfficiencyPID}{750}{620}

function preload() {
	chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");

}

function setup(){
    createCanvas(750, 620);
   feedbackbutton = new checkButton(20, 570,"connect insight to purpose     ",false);

}

function draw() {
    background(cdeviceLightGrey);
feedbackbutton.drawButton();

thinkRL("Describe process and work out what question you want to answer", 670, 196, 170,90);

    physicalPane(118, 130, 150, 110);
    physicalPane(143, 310, 200, 110);
    conceptualPane(143, 490, 200, 110);
    physicalPane(388, 490, 150, 110);

    transitionStep(118, 220, 90);
	transitionRedescribe(118, 400, 90);
    transitionStep(278, 490, 0);

//     step actions

		words("Find the\nefficiency of\nthis process", 53, 100);
		words("Say what happens,\nset snapshots and figure\nout what to measure\nso you can calculate", 53, 280);
		words("Calculate the change in\nenergy, twice", 53, 460);
		words("compare these two\nenergy changes\nto calculate\nthe efficiency", 323, 460);
		push();
			translate(75, 529);
			energy(3);
			translate(138, 0);
			energy(2);
	pop();


if (feedbackbutton.buttonisChecked){
    linkBarRightColour(460, 490, 80,cenergy);
	linkBarUpColour(540, 490, 360,cenergy);
	linkArrowLeftColour(540, 130, 345,cenergy)
	linkArrowRight(95, 520, 99);
	thinkRL("Was your calculation helpful? Could you find the efficiency? Was it high, or low?", 670, 390, 170,90);
	words("-> % ->?", 111, 524);
}



   titleBold("To calculate efficiency");
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
