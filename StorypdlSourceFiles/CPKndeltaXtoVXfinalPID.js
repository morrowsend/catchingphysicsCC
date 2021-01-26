// KndeltaXtoVXfinalPID

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
    createCanvas(700, 700);
    
    accelerationsetter=new CreateControlPuck();
    accelerationsetter.create(70,accelerationheight);
    deltasetter=new CreateControlStripHorizontalPositive();
    deltasetter.create(40,durationheight);
    
    initialvelocitysetter=new CreateControlPuck();
    initialvelocitysetter.create(70,530);
    
    deltalocationsetter=new CreateControlPuck();
    deltalocationsetter.create(520,530);
    
}

function draw() {
    background(CWHITE);
    placeConceptualPane(width/2, 200, width-40, 250);
    placeConceptualPane(width/2, 530, width-40, 350);
    placeTransitionStep(width/2, 340, 90);
    
    var accumulateacceleration = createVector(accelerationsetter.getValues().xSet,-accelerationsetter.getValues().ySet).mult(scaleFactoracceleration);
    var durationaccumulation=createVector(-deltasetter.getValues().xSet,deltasetter.getValues().ySet);
	var accumulatedvelocity=createVector(accelerationsetter.getValues().xSet,-accelerationsetter.getValues().ySet).mult(scaleFactorvelocity*durationaccumulation.x);
    var initialvelocity = createVector(initialvelocitysetter.getValues().xSet,-initialvelocitysetter.getValues().ySet).mult(scaleFactorvelocity);
    var deltavelocitylocationoffset = createVector(deltalocationsetter.getValues().xSet,-deltalocationsetter.getValues().ySet).mult(scaleFactorlocation);
	var finalvelocity=createVector(initialvelocity.x,initialvelocity.y);
	finalvelocity.add(accumulatedvelocity);
    
    //top pane display
    push();
		translate(220, accelerationheight);
		showVelocity(accumulateacceleration.mag(), degrees(accumulateacceleration.heading())+90, CIDEAGREEN);
	pop();
	push();		
		translate(220, durationheight);
		showDurationPoV(durationaccumulation.x, 1,CIDEAGREEN);
	pop();
	push();
		translate(320, accumulatedvelocityheight);
		showDisplacement(accumulatedvelocity.mag(), degrees(accumulatedvelocity.heading())+90, CIDEAGREEN);
	pop();
	placeWords("set velocity", 30, 100);
	placeWords("set duration", 30, 280);

 //bottom pane display 
	push();
		translate(250, 530);
		showDisplacement(initialvelocity.mag(), degrees(initialvelocity.heading())+90, CIDEARED);
		push();
			translate(80, 0);
			translate(deltavelocitylocationoffset.x, deltavelocitylocationoffset.y);
			showDisplacement(accumulatedvelocity.mag(), degrees(accumulatedvelocity.heading())+90, CIDEAGREEN);
		pop();
		if (abs(deltavelocitylocationoffset.y-initialvelocity.y*PXSCALE)<5 && (abs(deltavelocitylocationoffset.x-initialvelocity.x*PXSCALE)-80)<5 && deltavelocitylocationoffset.y!=0 && deltavelocitylocationoffset.x!=0){
				showDisplacement(finalvelocity.mag(), degrees(finalvelocity.heading())+90, CIDEABLUE);
		}
	pop();
	placeWords("set\ninitial\ndisplacement", 120, 510);
	placeWords("place\ntail to tip", 570, 510);

  placeTitleBold("calculating an accumulation in displacement, then a resultant displacement");  
}


function keyTyped() {
  if (key == 's') {
    saveCanvas('aSnapshot', 'png');
  }
    return false;
  }

