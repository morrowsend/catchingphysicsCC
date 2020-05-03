// CgMakeBreakPowerPID

var  completeloop=true;
var magnitudetheCurrent =0;

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
		completeloop=!completeloop;
		controlbutton.buttonwasPressed=false;
    }
     
    if(completeloop==true){
		words("break loop",344,306);
		var magnitudetheCurrent=5;
    }
    
    if(completeloop==false){
		words("complete loop",344,306);
		var magnitudetheCurrent=0;
    }
 
     push();
		translate(100, 200);
		if(loopbutton.buttonisChecked){
			loopOne();
		}
		circuitSimple("bulb");
		if(completeloop==true){
			push();
				translate(70-130,0);
				power(magnitudetheCurrent);
				translate(210+130,0);
				power(magnitudetheCurrent);
			pop();
			if (advicebutton.buttonisChecked){
				leadlinediagramshort("battery\nruns\ndown", 152-100, 159-200);
				leadlinediagramshort("bulb\nglows", 387-100, 159-200);
				advicedroid(428,-70,"The battery runs down and the bulb glows when the loop is complete.", 140, 80);
			} 
    
		}
	pop();
    
    
    if(completeloop==false){
		push();
			translate(200, 302);
			fill(cWhite);
			rect(0, -10, 40, 30);
			stroke(ccircuitRed);
			strokeWeight(1);
			line(0, 5, 40, -10);
		pop();
    if (advicebutton.buttonisChecked){
				
			advicedroid(428+100,200-70,"Nothing happening here.", 140, 30);
			}
    }

    


    titleBold("Make and break a loop");
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
