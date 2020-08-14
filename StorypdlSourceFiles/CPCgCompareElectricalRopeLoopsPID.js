// CgCompareElectricalRopeLoopsPID

var  completeloop=true;
var ropespeed=magnitudetheCurrent =5;
var lastposition=runtime=0;

function preload() {
	chatterFont= loadFont("../../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../../__support/ComicNeue-Angular-Bold.ttf");
}

function setup(){
    createCanvas(650, 600);
    controlbutton=new controlButton(386,284,118,30);
	advicebutton = new checkButton(504, 65,"tell me more",false);
	loopbutton = new checkButton(507, 284,"show loops",false);

}

function draw() {
    background(cWhite);
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
		words("break loops",344+50,306);
		magnitudetheCurrent=5;
		ropespeed=5;
    }
    
    if(completeloop==false){
		words("complete loops",344+50,306);
		magnitudetheCurrent=0;
		ropespeed=0;
    }
 
     push();
		translate(150, 200);
		if(loopbutton.buttonisChecked){
			loopOne();
			push();
				translate(0, 252);
				loopOne();
			pop();
		}
		circuitSimple("bulb");
		if(completeloop==true){
			push();
				translate(-60,0);
				power(magnitudetheCurrent);
				translate(340,0);
				power(magnitudetheCurrent);
			pop();
			if (advicebutton.buttonisChecked){
				leadlinediagramshort("battery\nrunning-down", -40, -41);
				leadlinediagramshort("bulb\nglowing", 287, -41);
				leadlinediagramshort("hand\nrunning-down", -40, 209);
				leadlinediagramshort("hand\nwarming", 287, 209);
				advicedroid(430,-90,"The battery is running down and the bulb is glowing when the loop is complete.", 140, 90);
				advicedroid(430,162,"One hand is running down and the other hand is warming when the loop is complete.", 140, 90);
			} 
    
		}
	pop();
    
    
    

    push();
		translate(-85, 260)
		ropeloop(234,300,216,214,cideaBlue,lastposition);    
    
    		push();
			translate(174, 198);
			power(magnitudetheCurrent);
			translate(342,0);
			power(magnitudetheCurrent);
		pop();

	pop();
	
	if(completeloop==false){
		push();
			translate(200, 302);
			fill(cWhite);
			rect(0, -10, 40, 30);
			rect(0, 242, 40, 30);
			stroke(ccircuitRed);
			strokeWeight(1);
			line(0, 5, 40, -10);
		pop();
    if (advicebutton.buttonisChecked){
				
			advicedroid(529+50,130-20,"Nothing happening here.", 140, 30);
			advicedroid(529+50,382-20,"And nothing happening here.", 140, 30);
			}
    }


    titleBold('Compare electrical loops and rope loops');
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
