// CgRopeFlowPatternPID

var lastposition=runtime=0;

function preload() {
	chatterFont= loadFont("../../__support/SF_Cartoonist_Hand.ttf");
	romanFont= loadFont("../../__support/ComicNeue-Angular-Light.ttf");
	italicFont= loadFont("../../__support/ComicNeue-Angular-Light-Oblique.ttf");
	titleFont = loadFont("../../__support/ComicNeue-Angular-Bold.ttf");
}

function setup(){
    createCanvas(540, 440);
    setForce = new controlStripVerticalPositive();
	setForce.create(48,130);
    setGrab = new controlStripVerticalPositive();
	setGrab.create(248,130);
	advicebutton = new checkButton(394, 65,"tell me more",false);

	 
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
 
ropeloop(48,300,200,150,cideaBlue,lastposition);
  
    push();
    translate(48, 250);
    force(forces, 0, cideaBlue);
    translate(200, 0);
    force(forces, 0, cideaRed);
    translate(-100+(ropespeed*pixelscaling/2), 80);
    velocity(-ropespeed, 90, cideaGrey);
    pop();

    
    	if (advicebutton.buttonisChecked){
		advicedroid(469,100,"When the rope in the loop is moving, the battery hand is getting tired, the bulb hand is warming", 260, 50);
		if (ropespeed!=0){
		leadlinediagramshort("grip force\nexerted by\nyour hand", 46, 250);
		leadlinediagramshort("slip force\nexerted by\nyour friend's hand", 248, 250);
		leadlinediagramnegative("the flow of the rope", 138, 250+80);
		}
			} 
    
    wordsframe("increase how much you pull", 68, 65, 80, 100);
    wordsframe("increase how much your friend grabs", 268, 65, 120, 100);

	titleBold('A rope loop: pulling and grabbing results in a flow');
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

