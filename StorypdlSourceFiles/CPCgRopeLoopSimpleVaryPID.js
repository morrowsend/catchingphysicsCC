// {CPCgRopeLoopSimpleVaryPID}{672}{380}

var lastposition=runtime=0;

function preload() {
	chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
  romanFont= loadFont("../__support/ComicNeue-Angular-Light.ttf");
  italicFont= loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
  titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");
}

function setup(){
    createCanvas(672, 360);
    setForce = new CreateControlStripVerticalPositive();
	setForce.create(184,130);
    setGrab = new CreateControlStripVerticalPositive();
	setGrab.create(384,130);
	advicebutton = new CreateCheckButton(525, 65,"tell me more",false);


}

function draw() {
    background(CWHITE);
    advicebutton.drawButton();

   let theforce=createVector(setForce.getValues().xSet,setForce.getValues().ySet);
   let thegrab=createVector(setGrab.getValues().xSet,setGrab.getValues().ySet);
   let forces = theforce.y*PIXELSCALING;
   let grab = 2+thegrab.y*PIXELSCALING;
   let ropespeed=(forces/grab)*PIXELSCALING*.6;
   let displayspeed=ropespeed/4;
   let powers=ropespeed*forces*.1;

drawRopeLoop(184,300,200,150,CIDEABLUE,lastposition);

    push();
    translate(184, 250);
    showForce(forces, 0, CIDEABLUE);
    translate(200, 0);
    showForce(forces, 0, CIDEARED);
    translate(-100+(ropespeed*PIXELSCALING/2), 80);
    showVelocity(-ropespeed, 90, CIDEAGREY);
    pop();


    push();
		translate(83, 250);
		showPower(powers);
		translate(370, 0);
		showPower(powers);
    pop();

    	if (advicebutton.buttonisChecked){
		placeAdviceDroid(600,100,"When the rope in the loop is moving, the battery hand is getting tired, the bulb hand is warming", 160, 90);
		if (ropespeed!=0){
		placeLeadLineNegative("battery\nrunning\ndown", 50, 250);
		placeLeadLineNegative("bulb\nglowing", 424, 250);
		}
			}

    placeWordsFrame("increase how much you pull", 204, 65, 80, 100);
    placeWordsFrame("increase how much your friend grabs", 404, 65, 120, 100);

	placeTitleBold('A rope loop: pulling and grabbing');
	runtime++;
	if (ropespeed!=0){
		lastposition=runtime*displayspeed;
	}
}

function mouseReleased(){
	advicebutton.changeState();
}

function keyTyped() {
  if (key == 's') {
    saveCanvas('aSnapshot', 'png');
  }
    return false;
  }

