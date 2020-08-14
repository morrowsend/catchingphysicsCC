// MgPredictLegPID

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
    
    accelerationsetter=new controlPuck();
    accelerationsetter.create(70,accelerationheight);
    deltasetter=new controlStripHorizontalPositive();
    deltasetter.create(40,durationheight);
    
    
}

function draw() {
    background(cWhite);
 
    var accumulateacceleration = createVector(accelerationsetter.getValues().xSet,-accelerationsetter.getValues().ySet).mult(scaleFactoracceleration);
    var durationaccumulation=createVector(-deltasetter.getValues().xSet,deltasetter.getValues().ySet);
	var accumulatedvelocity=createVector(accelerationsetter.getValues().xSet,-accelerationsetter.getValues().ySet).mult(scaleFactorvelocity*durationaccumulation.x);

    push();
		translate(220, accelerationheight);
		velocity(accumulateacceleration.mag(), degrees(accumulateacceleration.heading())+90, cideaGreen);
	pop();
	push();		
		translate(220, durationheight);
		durationpov(durationaccumulation.x, 1,cideaGreen);
	pop();
	push();
		translate(380, accumulatedvelocityheight);
		leadlinediagramnegative("start here", 0, 0);
		displacement(accumulatedvelocity.mag(), degrees(accumulatedvelocity.heading())+90, cideaGreen);
		push();
			rotate(accumulatedvelocity.heading());
			translate(accumulatedvelocity.mag()*pxscale, 0);
			rotate(-accumulatedvelocity.heading());
			leadlinediagramshort("end up here", 0, 0);
		pop();
	pop();
	words("set how fast\nand direction", 30, 80);
	words("set how long for", 30, 280);
	

  titleBold("Set speed, direction, time. See where you end up.");  
}


function keyTyped() {
  if (key == 's') {
    saveCanvas('aSnapshot', 'png');
  }
    return false;
  }
