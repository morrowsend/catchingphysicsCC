// {CPCgRopeFlowPatternPID}{540}{400}

var lastposition=runtime=0;

function preload() {
	chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
  romanFont= loadFont("../__support/ComicNeue-Angular-Light.ttf");
  italicFont= loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
  titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");

}

function setup(){
    createCanvas(540, 440);
    setForce = new CreateControlStripVerticalPositive();
	setForce.create(48,130);
    setGrab = new CreateControlStripVerticalPositive();
	setGrab.create(248,130);
	advicebutton = new CreateCheckButton(394, 65,"tell me more",false);


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

drawRopeLoop(48,300,200,150,CIDEABLUE,lastposition);

    push();
    translate(48, 250);
    showForce(forces, 0, CIDEABLUE);
    translate(200, 0);
    showForce(forces, 0, CIDEARED);
    translate(-100+(ropespeed*PIXELSCALING/2), 80);
    showVelocity(-ropespeed, 90, CIDEAGREY);
    pop();


    	if (advicebutton.buttonisChecked){
		placeAdviceDroid(469,100,"When the rope in the loop is moving, the battery hand is getting tired, the bulb hand is warming", 260, 50);
		if (ropespeed!=0){
		placeLeadLineShort("grip force\nexerted by\nyour hand", 46, 250);
		placeLeadLineShort("slip force\nexerted by\nyour friend's hand", 248, 250);
		placeLeadLineNegative("the flow of the rope", 138, 250+80);
		}
			}

    placeWordsFrame("increase how much you pull", 68, 65, 80, 100);
    placeWordsFrame("increase how much your friend grabs", 268, 65, 120, 100);

	placeTitleBold('A rope loop: pulling and grabbing results in a flow');
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

