// CPSnRampsForceDistanceSharePID

const loadweight=38;
const rampheight=100;

function preload() {
	chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");
}
function setup() {
	createCanvas(780,530);
	sliderHeight=new IanSlider(40,220,100,15,0,[0],false);
	sliderInverseSlope=new IanSlider(40,80,60,15,0,[0.334],false);
	forcesbutton = new checkButton(642,80,"show force",false);
	distancesbutton = new checkButton(623,120,"show distance",false);
	morebutton = new checkButton(633,160,"tell me more",false);
}

function draw() {
    background(cWhite);
	forcesbutton.drawButton();
	distancesbutton.drawButton();
	morebutton.drawButton();
	sliderHeight.draw();
	
	var liftedby = sliderHeight.getValue()*rampheight;
    
    sliderInverseSlope.draw();
    
    var ramphorizontal=rampheight*(0.1+sliderInverseSlope.getValue())*6;
    var slopeangle = atan2(-rampheight, ramphorizontal);
	push();
		translate(50, 500);
		fill(cideaGrey);
		noStroke();
		triangle(0,0,ramphorizontal, -rampheight,ramphorizontal, -0);
		line(0, 0, ramphorizontal, -rampheight);
		if (distancesbutton.buttonisChecked){
			stroke(cideaRed);
			strokeWeight(2);
			line(0,0,liftedby*ramphorizontal/rampheight, -liftedby);
		}
		translate(liftedby*ramphorizontal/rampheight, -liftedby);
		rotate(slopeangle);
		noStroke();
		fill(cideaBrown);
		rect(-15,0,45,-50);
		translate(0, -25);
		if (forcesbutton.buttonisChecked){
			force(loadweight*sin(slopeangle), -90, cideaGreen);
		}
	pop();
	
	    if(morebutton.buttonisChecked){
			advicedroid(450, 80, "There is a trade-off.\n\nChoose to push a short distance – more force needed.\nChoose to push further – less force needed.", 270, 110);
		}
	
	words("choose\nhow gradual\nto make the slope", 70, 90);
    words("lift the load\nup the slope", 70, 230);

 titleBold("making choices with a ramp");
}

function keyTyped() {
	if (key === "s") {
	saveCanvas("aSnapshot", "png");
	}
	return false;
}



function mousePressed(){
        sliderHeight.mousePressed();
        sliderInverseSlope.mousePressed();
	}
function mouseReleased(){
        sliderHeight.mouseReleased();
        sliderInverseSlope.mouseReleased();
        }


function keyTyped() {
	if (key === "s") {
	saveCanvas("aSnapshot", "png");
	}
	return false;
}

function mousePressed(){
        sliderHeight.mousePressed();
        sliderInverseSlope.mousePressed();

	}
function mouseReleased(){
        sliderHeight.mouseReleased();
        sliderInverseSlope.mouseReleased();
        forcesbutton.changeState();
		distancesbutton.changeState();
		morebutton.changeState();
        }
