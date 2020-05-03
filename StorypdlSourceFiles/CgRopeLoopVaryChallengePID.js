// FileName: CgRopeLoopVaryChallengePID

var lastposition=runtime=0;

function preload() {
	chatterFont= loadFont("../../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../../__support/ComicNeue-Angular-Bold.ttf");
}

function setup(){
    createCanvas(672, 390);
    setForce = new controlStripVerticalPositive();
	setForce.create(184,130);
    setGrab = new controlStripVerticalPositive();
	setGrab.create(384,130);

	 
}

function draw() {
    background(cWhite);
   
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
    
    	if (ropespeed!=0){
		leadlinediagramnegative("hand\ngetting\ntired\n\nbattery\nrunning\ndown", 50, 250);
		leadlinediagramnegative("hand\nwarming\n\nlamp\nglowing", 424, 250);
		leadlinediagramnegative("flow of rope", 424-138, 250+80);
		}
		
		challengedroid(550,193,"Set how hard you pull and how hard your friend grips. What will you notice for similar changes in an electric circuit?", 150, 120);
		
    
    wordsframe("increase how much you pull", 204, 65, 80, 100);
    wordsframe("increase how much your friend grips", 404, 65, 120, 100);

	titleBold('Using the rope loop to predict what will happen in electrical circuits');
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

