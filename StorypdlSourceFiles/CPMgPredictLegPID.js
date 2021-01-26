// CPMgPredictLegPID

// adapted from the acceleration accumulates velocity, so internal variables still speak of the source accumulation

const scaleFactoracceleration = 12;
const scaleFactorvelocity = 15;
const scaleFactorlocation = 250;

const accelerationheight = 150;
const durationheight = 250;
const accumulatedvelocityheight= (accelerationheight+durationheight)/2

function preload() {
   	chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");
}

function setup(){
    createCanvas(600, 350);
    
    accelerationsetter=new CreateControlPuck();
    accelerationsetter.create(70,accelerationheight);
    deltasetter=new CreateControlStripHorizontalPositive();
    deltasetter.create(40,durationheight);
    
    
}

function draw() {
    background(CWHITE);
 
    var accumulateacceleration = createVector(accelerationsetter.getValues().xSet,-accelerationsetter.getValues().ySet).mult(scaleFactoracceleration);
    var durationaccumulation=createVector(-deltasetter.getValues().xSet,deltasetter.getValues().ySet);
	var accumulatedvelocity=createVector(accelerationsetter.getValues().xSet,-accelerationsetter.getValues().ySet).mult(scaleFactorvelocity*durationaccumulation.x);

    push();
		translate(220, accelerationheight);
		showVelocity(accumulateacceleration.mag(), degrees(accumulateacceleration.heading())+90, CIDEAGREEN);
	pop();
	push();		
		translate(220, durationheight);
		showDurationPoV(durationaccumulation.x, 1,CIDEAGREEN);
	pop();
	push();
		translate(380, accumulatedvelocityheight);
		placeLeadLineNegative("start here", 0, 0);
		showDisplacement(accumulatedvelocity.mag(), degrees(accumulatedvelocity.heading())+90, CIDEAGREEN);
		push();
			rotate(accumulatedvelocity.heading());
			translate(accumulatedvelocity.mag()*PXSCALE, 0);
			rotate(-accumulatedvelocity.heading());
			placeLeadLineShort("end up here", 0, 0);
		pop();
	pop();
	placeWords("set how fast\nand direction", 30, 80);
	placeWords("set how long for", 30, 280);
	

  placeTitleBold("Set speed, direction, time. See where you end up.");  
}


function keyTyped() {
  if (key == 's') {
    saveCanvas('aSnapshot', 'png');
  }
    return false;
  }
