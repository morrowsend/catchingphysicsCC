// {CPCgRopePowerPatternPID}{560}{440}

var lastposition=runtime=0;

function preload() {
	chatterFont= loadFont("../__support/SF_Cartoonist_Hand.ttf");
  romanFont= loadFont("../__support/ComicNeue-Angular-Light.ttf");
  italicFont= loadFont("../__support/ComicNeue-Angular-Light-Oblique.ttf");
  titleFont = loadFont("../__support/ComicNeue-Angular-Bold.ttf");
}

function setup(){
    createCanvas(560, 440);
    setForce = new CreateControlStripVerticalPositive();
	setForce.create(48+50,130);
    setGrab = new CreateControlStripVerticalPositive();
	setGrab.create(248+50,130);
	advicebutton = new CreateCheckButton(394+20, 65,"tell me more",false);


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
   let powers=ropespeed*forces*.04;

drawRopeLoop(98,300,200,150,CIDEABLUE,lastposition);

    push();
    translate(50, 250);
    showPower(powers);
    translate(290, 0);
    showPower(powers);
    pop();


    	if (advicebutton.buttonisChecked){
		placeAdviceDroid(469+20,100,"You hand is running-down. The arrow shows you how much. Your friends hand is warming. The arrow shows you how much.", 160, 120);

			}

    placeWordsFrame("increase how much you pull", 118, 65, 80, 100);
    placeWordsFrame("increase how much your friend grabs", 318, 65, 120, 100);

	placeTitleBold('A rope loop: running-down and warming');
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

