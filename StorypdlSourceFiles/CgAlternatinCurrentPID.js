// CgAlternatinCurrentPID
 let runtime=0;


function preload() {
	chatterFont= loadFont("../../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../../__support/ComicNeue-Angular-Bold.ttf");
}

function setup(){
    createCanvas(600, 600);
	advicebutton = new checkButton(453, 65,"tell me more",false);
	loopbutton = new checkButton(460, 284,"show loops",false);

}

function draw() {
    background(cWhite);
    advicebutton.drawButton();
    loopbutton.drawButton();
    
var ropespeed =-120*cos(runtime/100); 
var magnitudetheCurrent =8*sin(runtime/100);  
 
     push();
		translate(100, 200);
		if(loopbutton.buttonisChecked){
			loopOne();
			push();
				translate(0, 252);
				loopOne();
			pop();
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
				advicedroid(430,-100,"The current alternates.A to-and-fro motion.", 140, 80);
				advicedroid(430,152,"The rope flows first one way and then the other. A to-and-fro motion.", 140, 80);
			} 
    
	pop();
    
    
    

    push();
		translate(-85+184, 260+300)
		if (ropespeed>=0){
		ropeloop(0,0,216,214,cideaBlue,ropespeed);
		} else{
		scale(-1,1);
		ropespeed=-ropespeed;
		ropeloop(-216,0,216,214,cideaBlue,ropespeed);
		}
	pop();


    titleBold('Alternating electrical loops and rope loops');
	runtime++;
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
