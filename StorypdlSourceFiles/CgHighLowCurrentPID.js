// CgHighLowCurrentPID

var  highcurrent=true;
var magnitudetheCurrent =0;
var commentwords="";

function preload() {
	chatterFont= loadFont("../../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../../__support/ComicNeue-Angular-Bold.ttf");
}

function setup(){
    createCanvas(600, 350);
    controlbutton=new controlButton(336,284,112,30);
	advicebutton = new checkButton(600-147, 65,"tell me more",false);
	loopbutton = new checkButton(600-147+11, 284,"show loop",false);

}

function draw() {
    background(cWhite);
    controlbutton.drawButton();
    advicebutton.drawButton();
    loopbutton.drawButton();
    
    if (controlbutton.buttonwasPressed){
		highcurrent=!highcurrent;
		controlbutton.buttonwasPressed=false;
    }
     
    if(highcurrent==true){
		words("less current",344,306);
		magnitudetheCurrent=8;
		commentwords="A large current everywhere in the loop. You must have chosen a lower resistance bulb.";
    }
    
    if(highcurrent==false){
		words("more current",344,306);
		magnitudetheCurrent=3;
		commentwords="A small current everywhere in the loop. You must have chosen a higher resistance bulb.";
    }
 
     push();
		translate(100, 200);
		if(loopbutton.buttonisChecked){
			loopOne();
		}
		circuitSimple("bulb");
		push();
			translate(30,0);
			currentArrow(magnitudetheCurrent,0);
			translate(156,0);
			currentArrow(magnitudetheCurrent,180);
			translate(-80, 0);
			currentArrow(magnitudetheCurrent,90);
			currentArrow(magnitudetheCurrent,270);
		pop();
		if (advicebutton.buttonisChecked){
			advicedroid(428,-90,commentwords, 140, 90);
		} 	
	pop();
    titleBold("Choose high or low current");
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
