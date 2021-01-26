// {CPCgHighLowCurrentPID}{600}{350}

var  highcurrent=true;
var magnitudetheCurrent =0;
var commentwords="";

function preload() {
	chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");
}

function setup(){
    createCanvas(600, 350);
	advicebutton = new CreateCheckButton(600-147, 65,"tell me more",false);
	loopbutton = new CreateCheckButton(600-147+11, 284,"show loop",false);
	choosecurrent=new CreateRadioButtons(316, 65,["high current","low current"]);

}

function draw() {
    background(CWHITE);
    advicebutton.drawButton();
    loopbutton.drawButton();
	var thecurrent=choosecurrent.makeChoice();

	switch(thecurrent){
		case "high current":
			magnitudetheCurrent=8;
			commentwords="A large current everywhere in the loop. You must have chosen a lower resistance bulb.";
			break;
		case "low current":
			magnitudetheCurrent=3;
			commentwords="A small current everywhere in the loop. You must have chosen a higher resistance bulb.";
			break;
		 }



     push();
		translate(80, 200);
		if(loopbutton.buttonisChecked){
			drawLoopOne();
		}
		drawCircuitSimple("bulb");
		push();
			translate(30,0);
			showCurrentArrow(magnitudetheCurrent,0);
			translate(156,0);
			showCurrentArrow(magnitudetheCurrent,180);
			translate(-80, 0);
			showCurrentArrow(magnitudetheCurrent,90);
			showCurrentArrow(magnitudetheCurrent,270);
		pop();
		if (advicebutton.buttonisChecked){
			placeAdviceDroid(448,-90,commentwords, 140, 90);
		}
	pop();
    placeTitleBold("Choose high or low current");
}

function mouseReleased(){
	advicebutton.changeState();
	loopbutton.changeState();
	}

function keyTyped() {
	if (key === "s") {


	saveCanvas("aSnapshot", "png");
	}
	return false;
}
