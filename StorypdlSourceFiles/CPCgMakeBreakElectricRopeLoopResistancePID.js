// {CgMakeBreakElectricRopeLoopResistancePID}{599}{600}

var  completeloop=true;
var ropespeed=magnitudetheCurrent =5;
var lastposition=runtime=0;

function preload() {
	chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");
}

function setup(){
    createCanvas(599, 600);
    controlbutton=new CreateControlButton(336,284,118,30);
	advicebutton = new CreateCheckButton(453, 65,"tell me more",false);
	loopbutton = new CreateCheckButton(457, 284,"show loops",false);

}

function draw() {
    background(CWHITE);
    controlbutton.drawButton();
    advicebutton.drawButton();
    loopbutton.drawButton();

	let forces = 4;
   let displayspeed=ropespeed/4;
   let powers=ropespeed*forces*.1;

    if (controlbutton.buttonwasPressed){
		completeloop=!completeloop;
		controlbutton.buttonwasPressed=false;
    }

    if(completeloop==true){
		placeWords("break loops",344,306);
		magnitudetheCurrent=5;
		ropespeed=5;
    }

    if(completeloop==false){
		placeWords("complete loops",344,306);
		magnitudetheCurrent=0;
		ropespeed=0;
    }

     push();
		translate(100, 200);
		if(loopbutton.buttonisChecked){
			drawLoopOne();
			push();
				translate(0, 252);
				drawLoopOne();
			pop();
		}
		drawCircuitSimple("bulb");
		if(completeloop==true){
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
				placeAdviceDroid(428,-100,"A complete loop and a small resistance. High current everywhere in the loop.", 140, 90);
				placeAdviceDroid(428,152,"A complete rope loop. Plenty of flow.", 140, 90);
			}

		}
	pop();




    push();
		translate(-85, 260)
		drawRopeLoop(184,300,216,214,CIDEABLUE,lastposition);



	pop();

	if(completeloop==false){
		push();
			translate(200, 302);
			fill(CWHITE);
			rect(0, -10, 40, 30);
			rect(0, 242, 40, 30);
			stroke(CCIRCUITRED);
			strokeWeight(1);
			line(0, 5, 40, -10);
		pop();
    if (advicebutton.buttonisChecked){

			placeAdviceDroid(528,110,"A very large resistance because there is a gap in the loop. No current anywhere in the loop.", 140, 90);
			placeAdviceDroid(528,372,"No flow. The loop is broken.", 140, 60);
			}
    }


    placeTitleBold('Making and breaking electrical loops and rope loops');
	runtime++;
	if (ropespeed!=0){
	lastposition=runtime*displayspeed;
	}
}

function mouseReleased(){
	controlbutton.checkPressed();
	advicebutton.changeState();
	loopbutton.changeState();
	}

function keyTyped() {
	if (key === "s") {


	saveCanvas("aSnapshot", "png");
	}
	return false;
}
