// CgRopeLoopSimpleVaryPID

var lastposition=runtime=0;

function preload() {
	chatterFont= loadFont("../../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../../__support/ComicNeue-Angular-Bold.ttf");
}

function setup(){
    createCanvas(672, 360);
    setForce = new controlStripVerticalPositive();
	setForce.create(184,130);
    setGrab = new controlStripVerticalPositive();
	setGrab.create(384,130);
	advicebutton = new checkButton(525, 65,"tell me more",false);

	 
}

function draw() {
    background(cWhite);
    advicebutton.drawButton();
   
   let theforce=createVector(setForce.getValues().xSet,setForce.getValues().ySet);
   let thegrab=createVector(setGrab.getValues().xSet,setGrab.getValues().ySet);
   let forces = theforce.y*pixelscaling;
   let grab = 2+thegrab.y*pixelscaling;
   let ropespeed=(forces/grab)*pixelscaling*.6;
   let displayspeed=ropespeed/4;
   let powers=ropespeed*forces*.1;
 
ropeloop(184,300,200,150,cideaBlue,lastposition);
  
    push();
    translate(184, 250);
    force(forces, 0, cideaBlue);
    translate(200, 0);
    force(forces, 0, cideaRed);
    translate(-100+(ropespeed*pixelscaling/2), 80);
    velocity(-ropespeed, 90, cideaGrey);
    pop();
    
    
    push();
		translate(83, 250);
		power(powers);
		translate(370, 0);
		power(powers);
    pop();
    
    	if (advicebutton.buttonisChecked){
		advicedroid(600,100,"When the rope in the loop is moving, the battery hand is getting tired, the bulb hand is warming", 160, 90);
		if (ropespeed!=0){
		leadlinediagramnegative("battery\nrunning\ndown", 50, 250);
		leadlinediagramnegative("bulb\nglowing", 424, 250);
		}
			} 
    
    wordsframe("increase how much you pull", 204, 65, 80, 100);
    wordsframe("increase how much your friend grabs", 404, 65, 120, 100);

	titleBold('A rope loop: pulling and grabbing');
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

